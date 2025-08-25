import { SuccessIcon, WarningIcon, InfoIcon, ErrorIcon, CloseIcon } from "./icons.js";
import { styles } from "./styles.js";

//============================
// Constants
//============================
const VISIBLE_TOASTS_AMOUNT = 3;
const VIEWPORT_OFFSET = "32px";
const TOAST_LIFETIME = 4000;
const TOAST_WIDTH = 356;
const GAP = 14;
const SWIPE_THRESHOLD = 20;
const TIME_BEFORE_UNMOUNT = 200;

//============================
// Sonner Class
//============================
/**
 * Sonner provides methods to show different types of toasts.
 */
class Sonner {

  constructor(options = {}) {
    const { closeButton, richColors, position, duration } = options;
    this.closeButton = closeButton || false;
    this.richColors = richColors || false;
    this.position = position || "bottom-right";
    this.duration = duration || TOAST_LIFETIME;
    this.ol = null;
    // Initialize the toaster with the provided options
    this.init();
  }

  /**
   * Initializes the toasters in the DOM.
   * @param {Object} options - { closeButton, richColors, position }
   */
  init() {
    if (this.reinitializeToaster()) {
      return;
    }
    this.renderToaster({ closeButton: this.closeButton, richColors: this.richColors, position: this.position });
    this.ol = document.getElementById("sonner-toaster-list");
    this.registerMouseOver(this.ol);
    this.registerKeyboardShortcuts(this.ol);
    this.buildStyles();
  }

  /**
   * Shows a new success toast with a specific message.
   * @param {string} msg
   */
  success(msg, options = {}) {
    const toast = this.show(msg, { type: "success", ...options });
    return toast
  }

  /**
   * Shows a new error toast with a specific message.
   * @param {string} msg
   */
  error(msg, options = {}) {
    const toast = this.show(msg, { type: "error", ...options });
    return toast
  }

  /**
   * Shows a new info toast with a specific message.
   * @param {string} msg
   */
  info(msg, options = {}) {
    const toast = this.show(msg, { type: "info", ...options });
    return toast
  }

  /**
   * Shows a new warning toast with a specific message.
   * @param {string} msg
   */
  warning(msg, options = {}) {
    const toast = this.show(msg, { type: "warning", ...options });
    return toast
  }

  /**
   * Shows a new toast with a specific message, description, and type.
   * @param {string} msg
   * @param {Object} options - { type, description }
   */
  show(msg, { description, type, duration, action, classes } = {}) {
    const list = document.getElementById("sonner-toaster-list");
    const { toast, id } = this.renderToast(list, msg, { description, type, action });
    // Wait for the toast to be mounted before registering swipe events
    setTimeout(() => {
      const el = list.children[0];
      const height = el.getBoundingClientRect().height;
      el.setAttribute("data-mounted", "true");
      el.setAttribute("data-initial-height", height);
      el.style.setProperty("--initial-height", `${height}px`);
      list.style.setProperty("--front-toast-height", `${height}px`);
      this.registerSwipe(id);
      this.refreshProperties();
      this.registerRemoveTimeout(el, duration);
      action && el.addEventListener('click', action);
      action && el.setAttribute("data-action", "true");
      classes && el.classList.add(classes);
    }, 16);
    return id;
  }

  /**
   * Removes an element with a specific id from the DOM after a delay.
   * @param {string} id
   */
  remove(id) {
    const el = document.querySelector(`[data-id="${id}"]`);
    if (!el) return;
    el.setAttribute("data-removed", "true");
    this.refreshProperties();
    const previousTid = el.getAttribute("data-unmount-tid");
    if (previousTid) window.clearTimeout(previousTid);
    const tid = setTimeout(() => {
      el.parentElement?.removeChild(el);
    }, TIME_BEFORE_UNMOUNT);
    el.setAttribute("data-unmount-tid", tid);
  }

  //============================
  // Assets
  //============================

  getAsset(type) {
    switch (type) {
      case "success":
        return SuccessIcon;
      case "info":
        return InfoIcon;
      case "warning":
        return WarningIcon;
      case "error":
        return ErrorIcon;
      default:
        return null;
    }
  }

  //============================
  // Auxiliary functions
  //============================

  /**
   * Generates a unique id for a toast.
   * The function generates a unique id by combining the current timestamp with a random string.
   * The function returns the unique id as a string.
   * @returns {string} - The unique id.
   * @example
   * const id = genid();
   */
  genid() {
    return (
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 12).padStart(12, 0)
    );
  }

  /**
   * Creates a new toast element and returns it along with its id.
   * The function creates a new list item element and sets its outerHTML to a string containing the toast structure.
   * The function also generates a unique id for the toast and returns it along with the toast element.
   * @param {Element} list - The list element to append the toast to.
   * @param {string} msg - The message to display in the toast.
   * @param {Object} options - An object with the following properties:
   * @param {string} options.type - The type of the toast. The type can be one of the following values: "success", "error", "info", "warning", or "neutral".
   * @param {string} options.description - The description to display in the toast.
   * @returns {Object} - An object with the following properties:
   * @returns {Element} toast - The toast element.
   * @returns {string} id - The unique id of the toast.
   */
  renderToast(list, msg, { type, description, action }) {
    const toast = document.createElement("div");
    list.prepend(toast);
    const id = this.genid();
    const count = list.children.length;
    const asset = this.getAsset(type);
    toast.outerHTML = `<li
      aria-live="polite"
      aria-atomic="true"
      role="${action ? "button" : "status"}"
      data-action="${action ? "true" : "false"}"
      tabindex="0"
      data-id="${id}"
      data-type="${type}"
      data-sonner-toast=""
      data-mounted="false"
      data-styled="true"
      data-promise="false"
      data-removed="false"
      data-visible="true"
      data-y-position="${list.getAttribute("data-y-position")}"
      data-x-position="${list.getAttribute("data-x-position")}"
      data-index="${0}"
      data-front="true"
      data-swiping="false"
      data-dismissible="true"
      data-swipe-out="false"
      data-expanded="false"
      style="--index: 0; --toasts-before: ${0}; --z-index: ${count}; --offset: 0px; --initial-height: 0px;"
    >
        ${
          list.getAttribute("data-close-button") === "true"
            ? `<button
            aria-label="Close"
            data-disabled=""
            class="absolute top-0.5 right-0.5 border border-neutral-800 text-neutral-800 bg-neutral-100 rounded-sm"
            onclick="window.sonnerInstance.remove('${id}')"
          >
            ${CloseIcon}
          </button>
        `
            : ""
        }
        ${
          asset
            ? `
      <div data-icon="" class="">
        ${asset}
      </div>
  `
            : ""
        }
      <div
            data-content=""
            class="">
        <div data-title="" class="">
          ${msg}
        </div>
        ${
          description
            ? `<div data-description="" class="">${description}</div>`
            : ""
        }
      </div>
  </li>
     `;
    return { toast, id };
  }

  /**
   * Registers a new remove timeout for a specific element.
   * The function sets a new timeout to remove the element from its parent after a delay.
   * The timeout ensures that all CSS transitions complete before the element is removed.
   * @param {Element} el - The element to register the remove timeout for.
   * @param {number} duration - The duration of the timeout in milliseconds.
   * @returns {void}
   */
  registerRemoveTimeout(el, duration = this.duration) {
    const tid = setTimeout(() => {
      this.remove(el.getAttribute("data-id"));
    }, duration);
    el.setAttribute("data-remove-tid", tid);
  }

  /**
   * Reinitializes the toaster and its children in the DOM.
   * @returns {Element} - The ordered list element with the sonner-toaster-list id.
   */
  reinitializeToaster() {
    this.ol = document.getElementById("sonner-toaster-list");
    if (!this.ol) return;
    for (let i = 0; i < this.ol.children.length; i++) {
      const el = this.ol.children[i];
      const id = el.getAttribute("data-id");
      this.registerSwipe(id);
      this.refreshProperties();
      this.registerRemoveTimeout(el);
    }
    return this.ol;
  }

  /**
   * Creates the toaster in the DOM.
   * @param {Object} options - An object with the following properties:
   * @param {boolean} options.closeButton - A boolean to control the visibility of the close button on the toasts.
   * @param {boolean} options.richColors - A boolean to control the use of rich colors for the toasts.
   * @param {string} options.position - A string to control the position of the toasts. The string is a combination of two values: the vertical position (top or bottom) and the horizontal position (left or right).
   * @returns {void}
   */
  renderToaster({ closeButton, richColors, position }) {
    const el = document.createElement("div");
    document.body.appendChild(el);
    position = position.split("-");
    el.outerHTML = `
  <section aria-label="Notifications alt+T" tabindex="-1">
    <ol
      dir="ltr"
      tabindex="-1"
      data-sonner-toaster="true"
      data-theme="light"
      data-close-button="${closeButton}"
      data-rich-colors="${richColors}"
      data-y-position="${position[0]}"
      data-x-position="${position[1]}"
      style="--front-toast-height: 0px; --offset: ${VIEWPORT_OFFSET}; --width: ${TOAST_WIDTH}px; --gap: ${GAP}px;"
      id="sonner-toaster-list"
    ></ol>
  </section>
  `;
  }
  /**
   * Registers mouse over events on a specific ordered list element in the DOM.
   * @param {Element} ol - The ordered list element to register mouse over events on.
   * @returns {void}
   */
  registerMouseOver(ol) {
    ol.addEventListener("mouseenter", () => {
      for (let i = 0; i < ol.children.length; i++) {
        const el = ol.children[i];
        if (el.getAttribute("data-expanded") === "true") continue;
        el.setAttribute("data-expanded", "true");
        this.clearRemoveTimeout(el);
      }
    });
    ol.addEventListener("mouseleave", () => {
      for (let i = 0; i < ol.children.length; i++) {
        const el = ol.children[i];
        if (el.getAttribute("data-expanded") === "false") continue;
        el.setAttribute("data-expanded", "false");
        this.registerRemoveTimeout(el);
      }
    });
  }

  /**
   * Registers keyboard shortcuts for the ordered list element in the DOM.
   * The function listens for the Alt+T key combination to expand or collapse the toasts.
   * @param {Element} ol - The ordered list element to register keyboard shortcuts for.
   * @returns {void}
   */
  registerKeyboardShortcuts(ol) {
    window.addEventListener("keydown", (e) => {
      if (e.altKey && e.code === "KeyT") {
        if (!ol || ol.children.length === 0) return;
        const expanded = ol.children[0].getAttribute("data-expanded");
        const newExpanded = expanded === "true" ? "false" : "true";
        for (let i = 0; i < ol.children.length; i++) {
          ol.children[i].setAttribute("data-expanded", newExpanded);
        }
      }
    });
  }

  /**
   * Clears the remove timeout for a specific element.
   * @param {Element} el - The element to clear the remove timeout for.
   * @returns {void}
   */
  clearRemoveTimeout(el) {
    const tid = el.getAttribute("data-remove-tid");
    if (tid) window.clearTimeout(tid);
  }

  /**
   * Refreshes the properties of the children of a specific list element in the DOM.
   * The function iterates over each child of the list, skipping those marked as removed.
   * For each remaining child, it updates various data attributes and CSS properties related to its index, visibility, offset, and z-index.
   * The function also keeps track of the cumulative height of the elements processed so far to calculate the offset for each element.
   */
  refreshProperties() {
    const list = document.getElementById("sonner-toaster-list");
    let heightsBefore = 0;
    let removed = 0;
    for (let i = 0; i < list.children.length; i++) {
      const el = list.children[i];
      if (el.getAttribute("data-removed") === "true") {
        removed++;
        continue;
      }
      const idx = i - removed;
      el.setAttribute("data-index", idx);
      el.setAttribute("data-front", idx === 0 ? "true" : "false");
      el.setAttribute(
        "data-visible",
        idx < VISIBLE_TOASTS_AMOUNT ? "true" : "false",
      );
      el.style.setProperty("--index", idx);
      el.style.setProperty("--toasts-before", idx);
      el.style.setProperty("--offset", `${GAP * idx + heightsBefore}px`);
      el.style.setProperty("--z-index", list.children.length - i);
      heightsBefore += Number(el.getAttribute("data-initial-height"));
    }
  }

  /**
   * Registers swipe events on an element with a specific id.
   * The element is selected using the id and event listeners are added for pointerdown, pointerup, and pointermove events.
   * The swipe gesture is calculated based on the movement of the pointer and the time taken for the swipe.
   * If the swipe meets a certain threshold or velocity, the element is marked for removal.
   * If the swipe does not meet the threshold, the swipe is reset.
   * For more information on the swipe gesture, see the following article:
   * https://emilkowal.ski/ui/building-a-toast-component
   *
   * @param {string} id - The data-id attribute of the element to register swipe events on.
   */
  registerSwipe(id) {
    const el = document.querySelector(`[data-id="${id}"]`);
    if (!el) return;
    let dragStartTime = null;
    let pointerStart = null;
    const y = el.getAttribute("data-y-position");
    el.addEventListener("pointerdown", (event) => {
      dragStartTime = new Date();
      event.target.setPointerCapture(event.pointerId);
      if (event.target.tagName === "BUTTON") return;
      el.setAttribute("data-swiping", "true");
      pointerStart = { x: event.clientX, y: event.clientY };
    });
    el.addEventListener("pointerup", (event) => {
      pointerStart = null;
      const swipeAmount = Number(
        el.style.getPropertyValue("--swipe-amount").replace("px", "") || 0,
      );
      const timeTaken = new Date().getTime() - dragStartTime.getTime();
      const velocity = Math.abs(swipeAmount) / timeTaken;
      // Remove only if threshold is met
      if (Math.abs(swipeAmount) >= SWIPE_THRESHOLD || velocity > 0.11) {
        el.setAttribute("data-swipe-out", "true");
        this.remove(id);
        return;
      }
      el.style.setProperty("--swipe-amount", "0px");
      el.setAttribute("data-swiping", "false");
    });
    el.addEventListener("pointermove", (event) => {
      if (!pointerStart) return;
      const yPosition = event.clientY - pointerStart.y;
      const xPosition = event.clientX - pointerStart.x;
      const clamp = y === "top" ? Math.min : Math.max;
      const clampedY = clamp(0, yPosition);
      const swipeStartThreshold = event.pointerType === "touch" ? 10 : 2;
      const isAllowedToSwipe = Math.abs(clampedY) > swipeStartThreshold;
      if (isAllowedToSwipe) {
        el.style.setProperty("--swipe-amount", `${yPosition}px`);
      } else if (Math.abs(xPosition) > swipeStartThreshold) {
        // User is swiping in wrong direction so we disable swipe gesture
        // for the current pointer down interaction
        pointerStart = null;
      }
    });
  }

  /**
   * Loads the Sonner styles in the DOM.
   * @returns {void}
   */
  buildStyles() {
   // read the sonner.css file and inject it into the document head
    const style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);
  }
}

export default Sonner;

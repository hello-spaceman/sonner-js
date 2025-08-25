const u = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20">
   <path
   fill-rule="evenodd"
   d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
   clip-rule="evenodd"
   />
</svg>`, g = `
<svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 24 24"
   fill="currentColor"
   height="20"
   width="20"
>
   <path
   fill-rule="evenodd"
   d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
   clip-rule="evenodd"
   />
</svg>`, h = `
<svg
   xmlns="http://www.w3.org/2000/svg"
   viewBox="0 0 20 20"
   fill="currentColor"
   height="20"
   width="20"
>
   <path
   fill-rule="evenodd"
   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z"
   clip-rule="evenodd"
   />
</svg>`, p = `
<svg
   xmlns="http://www.w3.org/2000/svg"
   viewbox="0 0 20 20"
   fill="currentColor"
   height="20"
   width="20"
>
   <path
   fill-rule="evenodd"
   d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
   clip-rule="evenodd"
   />
</svg>`, f = `
<svg
   xmlns="http://www.w3.org/2000/svg"
   width="12"
   height="12"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   stroke-width="2"
   stroke-linecap="round"
   stroke-linejoin="round"
>
   <line x1="18" y1="6" x2="6" y2="18"></line>
   <line x1="6" y1="6" x2="18" y2="18"></line>
</svg>`, m = `
   @layer plugins {

   html[dir="ltr"],
   [data-sonner-toaster][dir="ltr"] {
   --toast-icon-margin-start: -3px;
   --toast-icon-margin-end: 4px;
   --toast-svg-margin-start: -1px;
   --toast-svg-margin-end: 0px;
   --toast-button-margin-start: auto;
   --toast-button-margin-end: 0;
   --toast-close-button-start: 0;
   --toast-close-button-end: unset;
   --toast-close-button-transform: translate(-35%, -35%);
   }

   html[dir="rtl"],
   [data-sonner-toaster][dir="rtl"] {
   --toast-icon-margin-start: 4px;
   --toast-icon-margin-end: -3px;
   --toast-svg-margin-start: 0px;
   --toast-svg-margin-end: -1px;
   --toast-button-margin-start: 0;
   --toast-button-margin-end: auto;
   --toast-close-button-start: unset;
   --toast-close-button-end: 0;
   --toast-close-button-transform: translate(35%, -35%);
   }

   [data-sonner-toaster] {
   display: grid;
   justify-items: var(--toaster-justify-items, normal);
   position: fixed;
   width: var(--width);
   font-family:
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Segoe UI,
      Roboto,
      Helvetica Neue,
      Arial,
      Noto Sans,
      sans-serif,
      Apple Color Emoji,
      Segoe UI Emoji,
      Segoe UI Symbol,
      Noto Color Emoji;
   --gray1: hsl(0, 0%, 99%);
   --gray2: hsl(0, 0%, 97.3%);
   --gray3: hsl(0, 0%, 95.1%);
   --gray4: hsl(0, 0%, 93%);
   --gray5: hsl(0, 0%, 90.9%);
   --gray6: hsl(0, 0%, 88.7%);
   --gray7: hsl(0, 0%, 85.8%);
   --gray8: hsl(0, 0%, 78%);
   --gray9: hsl(0, 0%, 56.1%);
   --gray10: hsl(0, 0%, 52.3%);
   --gray11: hsl(0, 0%, 43.5%);
   --gray12: hsl(0, 0%, 9%);
   --border-radius: 8px;
   box-sizing: border-box;
   padding: 0;
   margin: 0;
   list-style: none;
   outline: none;
   z-index: 999999999;
   }

   [data-sonner-toaster][data-x-position="right"] {
   right: max(var(--toast-offset-inline, var(--offset)), env(safe-area-inset-right));
   --toaster-justify-items: end;
   }

   [data-sonner-toaster][data-x-position="left"] {
   left: max(var(--toast-offset-inline, var(--offset)), env(safe-area-inset-left));
   --toaster-justify-items: start;
   }

   [data-sonner-toaster][data-x-position="center"] {
   left: 50%;
   transform: translateX(-50%);
   --toaster-justify-items: center;
   }

   [data-sonner-toaster][data-y-position="top"] {
   top: max(var(--toast-offset-block, var(--offset)), env(safe-area-inset-top));
   }

   [data-sonner-toaster][data-y-position="bottom"] {
   bottom: max(var(--toast-offset-block, var(--offset)), env(safe-area-inset-bottom));
   }

   [data-sonner-toast] {
   --y: translateY(100%);
   --lift-amount: calc(var(--lift) * var(--gap));
   z-index: var(--z-index);
   position: absolute;
   opacity: 0;
   transform: var(--y);
   /* https://stackoverflow.com/questions/48124372/pointermove-event-not-working-with-touch-why-not */
   touch-action: none;
   will-change: transform, opacity, height;
   transition:
      transform 400ms,
      opacity 400ms,
      height 400ms,
      box-shadow 200ms;
   box-sizing: border-box;
   outline: none;
   overflow-wrap: anywhere;
   }

   [data-sonner-toast][data-styled="true"] {
   padding-block: var(--toast-padding-block, 16px);
   padding-inline: var(--toast-padding-inline, 16px);
   background: var(--normal-bg);
   border: 1px solid var(--normal-border);
   color: var(--normal-text);
   border-radius: var(--border-radius);
   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
   width: var(--width);
   font-size: 13px;
   display: flex;
   align-items: center;
   gap: 6px;
   }

   [data-sonner-toast]:focus-visible {
   box-shadow:
      0px 4px 12px rgba(0, 0, 0, 0.1),
      0 0 0 2px rgba(0, 0, 0, 0.2);
   }

   [data-sonner-toast][data-y-position="top"] {
   top: 0;
   --y: translateY(-100%);
   --lift: 1;
   --lift-amount: calc(1 * var(--gap));
   }

   [data-sonner-toast][data-y-position="bottom"] {
   bottom: 0;
   --y: translateY(100%);
   --lift: -1;
   --lift-amount: calc(var(--lift) * var(--gap));
   }

   [data-sonner-toast] [data-description] {
   font-weight: 400;
   line-height: 1.4;
   color: inherit;
   }

   [data-sonner-toast] [data-title] {
   font-weight: 500;
   line-height: 1.5;
   color: inherit;
   }

   [data-sonner-toast] [data-icon] {
   display: flex;
   height: 16px;
   width: 16px;
   position: relative;
   justify-content: flex-start;
   align-items: center;
   flex-shrink: 0;
   margin-left: var(--toast-icon-margin-start);
   margin-right: var(--toast-icon-margin-end);
   }

   [data-sonner-toast][data-promise="true"] [data-icon] > svg {
   opacity: 0;
   transform: scale(0.8);
   transform-origin: center;
   animation: sonner-fade-in 300ms ease forwards;
   }

   [data-sonner-toast] [data-icon] > * {
   flex-shrink: 0;
   }

   [data-sonner-toast] [data-icon] svg {
   margin-left: var(--toast-svg-margin-start);
   margin-right: var(--toast-svg-margin-end);
   }

   [data-sonner-toast] [data-content] {
   display: flex;
   flex-direction: column;
   gap: 2px;
   }

   [data-sonner-toast] [data-button] {
   border-radius: 4px;
   padding-left: 8px;
   padding-right: 8px;
   height: 24px;
   font-size: 12px;
   color: var(--normal-bg);
   background: var(--normal-text);
   margin-left: var(--toast-button-margin-start);
   margin-right: var(--toast-button-margin-end);
   border: none;
   cursor: pointer;
   outline: none;
   display: flex;
   align-items: center;
   flex-shrink: 0;
   transition:
      opacity 400ms,
      box-shadow 200ms;
   }

   [data-sonner-toast] [data-button]:focus-visible {
   box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);
   }

   [data-sonner-toast] [data-button]:first-of-type {
   margin-left: var(--toast-button-margin-start);
   margin-right: var(--toast-button-margin-end);
   }

   [data-sonner-toast] [data-cancel] {
   color: var(--normal-text);
   background: rgba(0, 0, 0, 0.08);
   }

   [data-sonner-toast][data-theme="dark"] [data-cancel] {
   background: rgba(255, 255, 255, 0.3);
   }

   [data-sonner-toast] [data-close-button] {
   position: absolute;
   left: var(--toast-close-button-start);
   right: var(--toast-close-button-end);
   top: 0;
   height: 20px;
   width: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0;
   background: var(--gray1);
   color: var(--gray12);
   border: 1px solid var(--gray4);
   transform: var(--toast-close-button-transform);
   border-radius: 50%;
   cursor: pointer;
   z-index: 1;
   transition:
      opacity 100ms,
      background 200ms,
      border-color 200ms;
   }

   [data-sonner-toast] [data-close-button]:focus-visible {
   box-shadow:
      0px 4px 12px rgba(0, 0, 0, 0.1),
      0 0 0 2px rgba(0, 0, 0, 0.2);
   }

   [data-sonner-toast] [data-action] {
      &::after {
         content: '';
         inset: 0;
         position: absolute;
         z-index: 1;
      }
   }

   [data-sonner-toast] [data-disabled="true"] {
   cursor: not-allowed;
   }

   [data-sonner-toast]:hover [data-close-button]:hover {
   background: var(--gray2);
   border-color: var(--gray5);
   }

   /* Leave a ghost div to avoid setting hover to false when swiping out */
   [data-sonner-toast][data-swiping="true"]:before {
   content: "";
   position: absolute;
   left: 0;
   right: 0;
   height: 100%;
   z-index: -1;
   }

   [data-sonner-toast][data-y-position="top"][data-swiping="true"]:before {
   /* y 50% needed to distribute height additional height evenly */
   bottom: 50%;
   transform: scaleY(3) translateY(50%);
   }

   [data-sonner-toast][data-y-position="bottom"][data-swiping="true"]:before {
   /* y -50% needed to distribute height additional height evenly */
   top: 50%;
   transform: scaleY(3) translateY(-50%);
   }

   /* Leave a ghost div to avoid setting hover to false when transitioning out */
   [data-sonner-toast][data-swiping="false"][data-removed="true"]:before {
   content: "";
   position: absolute;
   inset: 0;
   transform: scaleY(2);
   }

   /* Needed to avoid setting hover to false when inbetween toasts */
   [data-sonner-toast]:after {
   content: "";
   position: absolute;
   left: 0;
   height: calc(var(--gap) + 1px);
   bottom: 100%;
   width: 100%;
   }

   [data-sonner-toast][data-mounted="true"] {
   --y: translateY(0);
   opacity: 1;
   }

   [data-sonner-toast][data-expanded="false"][data-front="false"] {
   --scale: var(--toasts-before) * 0.05 + 1;
   --y: translateY(calc(var(--lift-amount) * var(--toasts-before)))
      scale(calc(-1 * var(--scale)));
   height: var(--front-toast-height);
   }

   [data-sonner-toast] > * {
   transition: opacity 400ms;
   }

   [data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"]
   > * {
   opacity: 0;
   }

   [data-sonner-toast][data-visible="false"] {
   opacity: 0;
   pointer-events: none;
   }

   [data-sonner-toast][data-mounted="true"][data-expanded="true"] {
   --y: translateY(calc(var(--lift) * var(--offset)));
   height: var(--initial-height);
   }

   [data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"] {
   --y: translateY(calc(var(--lift) * -100%));
   opacity: 0;
   }

   [data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"] {
   --y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));
   opacity: 0;
   }

   [data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"] {
   --y: translateY(40%);
   opacity: 0;
   transition:
      transform 500ms,
      opacity 200ms;
   }

   /* Bump up the height to make sure hover state doesn't get set to false */
   [data-sonner-toast][data-removed="true"][data-front="false"]:before {
      height: calc(var(--initial-height) + 20%);
   }

   [data-sonner-toast][data-swiping="true"] {
   transform: var(--y) translateY(var(--swipe-amount, 0px));
   transition: none;
   }

   [data-sonner-toast][data-swipe-out="true"][data-y-position="bottom"],
   [data-sonner-toast][data-swipe-out="true"][data-y-position="top"] {
   animation: swipe-out 200ms ease-out forwards;
   }

   @keyframes swipe-out {
   from {
      transform: translateY(
         calc(var(--lift) * var(--toast-offset-block, var(--offset)) + var(--swipe-amount))
      );
      opacity: 1;
   }

   to {
      transform: translateY(
         calc(
         var(--lift) * var(--toast-offset-block, var(--offset)) + var(--swipe-amount) + var(--lift) * -100%
         )
      );
      opacity: 0;
   }
   }

   @media (max-width: 600px) {
   [data-sonner-toaster] {
      position: fixed;
      --mobile-offset: 16px;
      right: var(--mobile-offset);
      left: var(--mobile-offset);
      width: 100%;
   }

   [data-sonner-toaster] [data-sonner-toast] {
      left: 0;
      right: 0;
      width: var(--toast-width, calc(100% - 32px));
   }

   [data-sonner-toaster][data-x-position="left"] {
      left: var(--mobile-offset);
   }

   [data-sonner-toaster][data-y-position="bottom"] {
      bottom: 20px;
   }

   [data-sonner-toaster][data-y-position="top"] {
      top: 20px;
   }

   [data-sonner-toaster][data-x-position="center"] {
      left: var(--mobile-offset);
      right: var(--mobile-offset);
      transform: none;
   }
   }

   [data-sonner-toaster][data-theme="light"] {
   --normal-bg: #fff;
   --normal-border: var(--gray4);
   --normal-text: var(--gray12);

   --success-bg: hsl(143, 85%, 96%);
   --success-border: hsl(145, 92%, 91%);
   --success-text: hsl(140, 100%, 27%);

   --info-bg: hsl(208, 100%, 97%);
   --info-border: hsl(221, 91%, 91%);
   --info-text: hsl(210, 92%, 45%);

   --warning-bg: hsl(49, 100%, 97%);
   --warning-border: hsl(49, 91%, 91%);
   --warning-text: hsl(31, 92%, 45%);

   --error-bg: hsl(359, 100%, 97%);
   --error-border: hsl(359, 100%, 94%);
   --error-text: hsl(360, 100%, 45%);
   }

   [data-sonner-toaster][data-theme="light"]
   [data-sonner-toast][data-invert="true"] {
   --normal-bg: #000;
   --normal-border: hsl(0, 0%, 20%);
   --normal-text: var(--gray1);
   }

   [data-sonner-toaster][data-theme="dark"]
   [data-sonner-toast][data-invert="true"] {
   --normal-bg: #fff;
   --normal-border: var(--gray3);
   --normal-text: var(--gray12);
   }

   [data-sonner-toaster][data-theme="dark"] {
   --normal-bg: #000;
   --normal-border: hsl(0, 0%, 20%);
   --normal-text: var(--gray1);

   --success-bg: hsl(150, 100%, 6%);
   --success-border: hsl(147, 100%, 12%);
   --success-text: hsl(150, 86%, 65%);

   --info-bg: hsl(215, 100%, 6%);
   --info-border: hsl(223, 100%, 12%);
   --info-text: hsl(216, 87%, 65%);

   --warning-bg: hsl(64, 100%, 6%);
   --warning-border: hsl(60, 100%, 12%);
   --warning-text: hsl(46, 87%, 65%);

   --error-bg: hsl(358, 76%, 10%);
   --error-border: hsl(357, 89%, 16%);
   --error-text: hsl(358, 100%, 81%);
   }

   [data-rich-colors="true"] [data-sonner-toast][data-type="success"] {
   background: var(--success-bg);
   border-color: var(--success-border);
   color: var(--success-text);
   }

   [data-rich-colors="true"]
   [data-sonner-toast][data-type="success"]
   [data-close-button] {
   background: var(--success-bg);
   border-color: var(--success-border);
   color: var(--success-text);
   }

   [data-rich-colors="true"] [data-sonner-toast][data-type="info"] {
   background: var(--info-bg);
   border-color: var(--info-border);
   color: var(--info-text);
   }

   [data-rich-colors="true"]
   [data-sonner-toast][data-type="info"]
   [data-close-button] {
   background: var(--info-bg);
   border-color: var(--info-border);
   color: var(--info-text);
   }

   [data-rich-colors="true"] [data-sonner-toast][data-type="warning"] {
   background: var(--warning-bg);
   border-color: var(--warning-border);
   color: var(--warning-text);
   }

   [data-rich-colors="true"]
   [data-sonner-toast][data-type="warning"]
   [data-close-button] {
   background: var(--warning-bg);
   border-color: var(--warning-border);
   color: var(--warning-text);
   }

   [data-rich-colors="true"] [data-sonner-toast][data-type="error"] {
   background: var(--error-bg);
   border-color: var(--error-border);
   color: var(--error-text);
   }

   [data-rich-colors="true"]
   [data-sonner-toast][data-type="error"]
   [data-close-button] {
   background: var(--error-bg);
   border-color: var(--error-border);
   color: var(--error-text);
   }

   .sonner-loading-wrapper {
   --size: 16px;
   height: var(--size);
   width: var(--size);
   position: absolute;
   inset: 0;
   z-index: 10;
   }

   .sonner-loading-wrapper[data-visible="false"] {
   transform-origin: center;
   animation: sonner-fade-out 0.2s ease forwards;
   }

   .sonner-spinner {
   position: relative;
   top: 50%;
   left: 50%;
   height: var(--size);
   width: var(--size);
   }

   .sonner-loading-bar {
   animation: sonner-spin 1.2s linear infinite;
   background: var(--gray11);
   border-radius: 6px;
   height: 8%;
   left: -10%;
   position: absolute;
   top: -3.9%;
   width: 24%;
   }

   .sonner-loading-bar:nth-child(1) {
   animation-delay: -1.2s;
   transform: rotate(0.0001deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(2) {
   animation-delay: -1.1s;
   transform: rotate(30deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(3) {
   animation-delay: -1s;
   transform: rotate(60deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(4) {
   animation-delay: -0.9s;
   transform: rotate(90deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(5) {
   animation-delay: -0.8s;
   transform: rotate(120deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(6) {
   animation-delay: -0.7s;
   transform: rotate(150deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(7) {
   animation-delay: -0.6s;
   transform: rotate(180deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(8) {
   animation-delay: -0.5s;
   transform: rotate(210deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(9) {
   animation-delay: -0.4s;
   transform: rotate(240deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(10) {
   animation-delay: -0.3s;
   transform: rotate(270deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(11) {
   animation-delay: -0.2s;
   transform: rotate(300deg) translate(146%);
   }

   .sonner-loading-bar:nth-child(12) {
   animation-delay: -0.1s;
   transform: rotate(330deg) translate(146%);
   }

   @keyframes sonner-fade-in {
   0% {
      opacity: 0;
      transform: scale(0.8);
   }
   100% {
      opacity: 1;
      transform: scale(1);
   }
   }

   @keyframes sonner-fade-out {
   0% {
      opacity: 1;
      transform: scale(1);
   }
   100% {
      opacity: 0;
      transform: scale(0.8);
   }
   }

   @keyframes sonner-spin {
   0% {
      opacity: 1;
   }
   100% {
      opacity: 0.15;
   }
   }

   @media (prefers-reduced-motion) {
   [data-sonner-toast],
   [data-sonner-toast] > *,
   .sonner-loading-bar {
      transition: none !important;
      animation: none !important;
   }
   }

   .sonner-loader {
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   transform-origin: center;
   transition:
      opacity 200ms,
      transform 200ms;
   }

   .sonner-loader[data-visible="false"] {
   opacity: 0;
   transform: scale(0.8) translate(-50%, -50%);
   }
}
`;
const b = "32px";
class x {
  constructor(a = {}) {
    const { closeButton: t, richColors: e, position: o, duration: r } = a;
    this.closeButton = t || !1, this.richColors = e || !1, this.position = o || "bottom-right", this.duration = r || 4e3, this.ol = null, this.init();
  }
  /**
   * Initializes the toasters in the DOM.
   * @param {Object} options - { closeButton, richColors, position }
   */
  init() {
    this.reinitializeToaster() || (this.renderToaster({ closeButton: this.closeButton, richColors: this.richColors, position: this.position }), this.ol = document.getElementById("sonner-toaster-list"), this.registerMouseOver(this.ol), this.registerKeyboardShortcuts(this.ol), this.buildStyles());
  }
  /**
   * Shows a new success toast with a specific message.
   * @param {string} msg
   */
  success(a, t = {}) {
    return this.show(a, { type: "success", ...t });
  }
  /**
   * Shows a new error toast with a specific message.
   * @param {string} msg
   */
  error(a, t = {}) {
    return this.show(a, { type: "error", ...t });
  }
  /**
   * Shows a new info toast with a specific message.
   * @param {string} msg
   */
  info(a, t = {}) {
    return this.show(a, { type: "info", ...t });
  }
  /**
   * Shows a new warning toast with a specific message.
   * @param {string} msg
   */
  warning(a, t = {}) {
    return this.show(a, { type: "warning", ...t });
  }
  /**
   * Shows a new toast with a specific message, description, and type.
   * @param {string} msg
   * @param {Object} options - { type, description }
   */
  show(a, { description: t, type: e, duration: o, action: r, classes: n } = {}) {
    const s = document.getElementById("sonner-toaster-list"), { toast: l, id: d } = this.renderToast(s, a, { description: t, type: e, action: r });
    return setTimeout(() => {
      const i = s.children[0], c = i.getBoundingClientRect().height;
      i.setAttribute("data-mounted", "true"), i.setAttribute("data-initial-height", c), i.style.setProperty("--initial-height", `${c}px`), s.style.setProperty("--front-toast-height", `${c}px`), this.registerSwipe(d), this.refreshProperties(), this.registerRemoveTimeout(i, o), r && i.addEventListener("click", r), r && i.setAttribute("data-action", "true"), n && i.classList.add(n);
    }, 16), d;
  }
  /**
   * Removes an element with a specific id from the DOM after a delay.
   * @param {string} id
   */
  remove(a) {
    const t = document.querySelector(`[data-id="${a}"]`);
    if (!t) return;
    t.setAttribute("data-removed", "true"), this.refreshProperties();
    const e = t.getAttribute("data-unmount-tid");
    e && window.clearTimeout(e);
    const o = setTimeout(() => {
      t.parentElement?.removeChild(t);
    }, 200);
    t.setAttribute("data-unmount-tid", o);
  }
  //============================
  // Assets
  //============================
  getAsset(a) {
    switch (a) {
      case "success":
        return u;
      case "info":
        return h;
      case "warning":
        return g;
      case "error":
        return p;
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
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 12).padStart(12, 0);
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
  renderToast(a, t, { type: e, description: o, action: r }) {
    const n = document.createElement("div");
    a.prepend(n);
    const s = this.genid(), l = a.children.length, d = this.getAsset(e);
    return n.outerHTML = `<li
      aria-live="polite"
      aria-atomic="true"
      role="${r ? "button" : "status"}"
      data-action="${r ? "true" : "false"}"
      tabindex="0"
      data-id="${s}"
      data-type="${e}"
      data-sonner-toast=""
      data-mounted="false"
      data-styled="true"
      data-promise="false"
      data-removed="false"
      data-visible="true"
      data-y-position="${a.getAttribute("data-y-position")}"
      data-x-position="${a.getAttribute("data-x-position")}"
      data-index="0"
      data-front="true"
      data-swiping="false"
      data-dismissible="true"
      data-swipe-out="false"
      data-expanded="false"
      style="--index: 0; --toasts-before: 0; --z-index: ${l}; --offset: 0px; --initial-height: 0px;"
    >
        ${a.getAttribute("data-close-button") === "true" ? `<button
            aria-label="Close"
            data-disabled=""
            class="absolute top-0.5 right-0.5 border border-neutral-800 text-neutral-800 bg-neutral-100 rounded-sm"
            onclick="window.sonnerInstance.remove('${s}')"
          >
            ${f}
          </button>
        ` : ""}
        ${d ? `
      <div data-icon="" class="">
        ${d}
      </div>
  ` : ""}
      <div
            data-content=""
            class="">
        <div data-title="" class="">
          ${t}
        </div>
        ${o ? `<div data-description="" class="">${o}</div>` : ""}
      </div>
  </li>
     `, { toast: n, id: s };
  }
  /**
   * Registers a new remove timeout for a specific element.
   * The function sets a new timeout to remove the element from its parent after a delay.
   * The timeout ensures that all CSS transitions complete before the element is removed.
   * @param {Element} el - The element to register the remove timeout for.
   * @param {number} duration - The duration of the timeout in milliseconds.
   * @returns {void}
   */
  registerRemoveTimeout(a, t = this.duration) {
    const e = setTimeout(() => {
      this.remove(a.getAttribute("data-id"));
    }, t);
    a.setAttribute("data-remove-tid", e);
  }
  /**
   * Reinitializes the toaster and its children in the DOM.
   * @returns {Element} - The ordered list element with the sonner-toaster-list id.
   */
  reinitializeToaster() {
    if (this.ol = document.getElementById("sonner-toaster-list"), !!this.ol) {
      for (let a = 0; a < this.ol.children.length; a++) {
        const t = this.ol.children[a], e = t.getAttribute("data-id");
        this.registerSwipe(e), this.refreshProperties(), this.registerRemoveTimeout(t);
      }
      return this.ol;
    }
  }
  /**
   * Creates the toaster in the DOM.
   * @param {Object} options - An object with the following properties:
   * @param {boolean} options.closeButton - A boolean to control the visibility of the close button on the toasts.
   * @param {boolean} options.richColors - A boolean to control the use of rich colors for the toasts.
   * @param {string} options.position - A string to control the position of the toasts. The string is a combination of two values: the vertical position (top or bottom) and the horizontal position (left or right).
   * @returns {void}
   */
  renderToaster({ closeButton: a, richColors: t, position: e }) {
    const o = document.createElement("div");
    document.body.appendChild(o), e = e.split("-"), o.outerHTML = `
  <section aria-label="Notifications alt+T" tabindex="-1">
    <ol
      dir="ltr"
      tabindex="-1"
      data-sonner-toaster="true"
      data-theme="light"
      data-close-button="${a}"
      data-rich-colors="${t}"
      data-y-position="${e[0]}"
      data-x-position="${e[1]}"
      style="--front-toast-height: 0px; --offset: ${b}; --width: 356px; --gap: 14px;"
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
  registerMouseOver(a) {
    a.addEventListener("mouseenter", () => {
      for (let t = 0; t < a.children.length; t++) {
        const e = a.children[t];
        e.getAttribute("data-expanded") !== "true" && (e.setAttribute("data-expanded", "true"), this.clearRemoveTimeout(e));
      }
    }), a.addEventListener("mouseleave", () => {
      for (let t = 0; t < a.children.length; t++) {
        const e = a.children[t];
        e.getAttribute("data-expanded") !== "false" && (e.setAttribute("data-expanded", "false"), this.registerRemoveTimeout(e));
      }
    });
  }
  /**
   * Registers keyboard shortcuts for the ordered list element in the DOM.
   * The function listens for the Alt+T key combination to expand or collapse the toasts.
   * @param {Element} ol - The ordered list element to register keyboard shortcuts for.
   * @returns {void}
   */
  registerKeyboardShortcuts(a) {
    window.addEventListener("keydown", (t) => {
      if (t.altKey && t.code === "KeyT") {
        if (!a || a.children.length === 0) return;
        const o = a.children[0].getAttribute("data-expanded") === "true" ? "false" : "true";
        for (let r = 0; r < a.children.length; r++)
          a.children[r].setAttribute("data-expanded", o);
      }
    });
  }
  /**
   * Clears the remove timeout for a specific element.
   * @param {Element} el - The element to clear the remove timeout for.
   * @returns {void}
   */
  clearRemoveTimeout(a) {
    const t = a.getAttribute("data-remove-tid");
    t && window.clearTimeout(t);
  }
  /**
   * Refreshes the properties of the children of a specific list element in the DOM.
   * The function iterates over each child of the list, skipping those marked as removed.
   * For each remaining child, it updates various data attributes and CSS properties related to its index, visibility, offset, and z-index.
   * The function also keeps track of the cumulative height of the elements processed so far to calculate the offset for each element.
   */
  refreshProperties() {
    const a = document.getElementById("sonner-toaster-list");
    let t = 0, e = 0;
    for (let o = 0; o < a.children.length; o++) {
      const r = a.children[o];
      if (r.getAttribute("data-removed") === "true") {
        e++;
        continue;
      }
      const n = o - e;
      r.setAttribute("data-index", n), r.setAttribute("data-front", n === 0 ? "true" : "false"), r.setAttribute(
        "data-visible",
        n < 3 ? "true" : "false"
      ), r.style.setProperty("--index", n), r.style.setProperty("--toasts-before", n), r.style.setProperty("--offset", `${14 * n + t}px`), r.style.setProperty("--z-index", a.children.length - o), t += Number(r.getAttribute("data-initial-height"));
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
  registerSwipe(a) {
    const t = document.querySelector(`[data-id="${a}"]`);
    if (!t) return;
    let e = null, o = null;
    const r = t.getAttribute("data-y-position");
    t.addEventListener("pointerdown", (n) => {
      e = /* @__PURE__ */ new Date(), n.target.setPointerCapture(n.pointerId), n.target.tagName !== "BUTTON" && (t.setAttribute("data-swiping", "true"), o = { x: n.clientX, y: n.clientY });
    }), t.addEventListener("pointerup", (n) => {
      o = null;
      const s = Number(
        t.style.getPropertyValue("--swipe-amount").replace("px", "") || 0
      ), l = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), d = Math.abs(s) / l;
      if (Math.abs(s) >= 20 || d > 0.11) {
        t.setAttribute("data-swipe-out", "true"), this.remove(a);
        return;
      }
      t.style.setProperty("--swipe-amount", "0px"), t.setAttribute("data-swiping", "false");
    }), t.addEventListener("pointermove", (n) => {
      if (!o) return;
      const s = n.clientY - o.y, l = n.clientX - o.x, i = (r === "top" ? Math.min : Math.max)(0, s), c = n.pointerType === "touch" ? 10 : 2;
      Math.abs(i) > c ? t.style.setProperty("--swipe-amount", `${s}px`) : Math.abs(l) > c && (o = null);
    });
  }
  /**
   * Loads the Sonner styles in the DOM.
   * @returns {void}
   */
  buildStyles() {
    const a = document.createElement("style");
    a.innerHTML = m, document.head.appendChild(a);
  }
}
export {
  x as default
};

/* eslint-disable no-param-reassign */
import { HTMLUniOverlayElement, OverlayController, OverlayInterface } from './OverlayInterface';

let lastId = 0;

export const BACKDROP = 'backdrop';

function getAppRoot(doc: Document) {
  const roots = doc.querySelectorAll('.uniform-app');
  if (roots.length > 1) console.warn('Uniform: Only one .uniform-app element should be present at a time');
  return roots[0] || doc.body;
}

function isDescendant(parent: HTMLElement, child: HTMLElement | null) {
  let currentNode = child;
  while (currentNode) {
    if (currentNode === parent) {
      return true;
    }
    currentNode = currentNode.parentElement;
  }
  return false;
}

export function getOverlays(doc: Document, selector?: string): HTMLUniOverlayElement[] {
  if (selector === undefined) {
    selector = '[uni-overlay]';
  }
  return (Array.from(doc.querySelectorAll(selector)) as HTMLUniOverlayElement[])
    .filter(c => c.overlayIndex > 0);
}

export function getOverlay(doc: Document, overlayTag?: string, id?: string): HTMLUniOverlayElement | undefined {
  const overlays = getOverlays(doc, overlayTag);
  return (id === undefined)
    ? overlays[overlays.length - 1]
    : overlays.find(o => o.id === id);
}

export function connectListeners(doc: Document) {
  if (lastId === 0) {
    lastId = 1;

    // trap focus inside overlays
    doc.addEventListener('focusin', (ev) => {
      const lastOverlay = getOverlay(doc);
      if (lastOverlay && lastOverlay.backdropDismiss && !isDescendant(lastOverlay, ev.target as HTMLElement)) {
        const firstInput = lastOverlay.querySelector('input,button') as HTMLElement | null;
        if (firstInput) {
          firstInput.focus();
        }
      }
    });
    // handle ESC to close overlay
    doc.addEventListener('keyup', (ev) => {
      if (ev.key === 'Escape') {
        const lastOverlay = getOverlay(doc);
        if (lastOverlay && lastOverlay.backdropDismiss) {
          lastOverlay.dismiss(undefined, BACKDROP);
        }
      }
    });
  }
}

export function prepareOverlay<T extends HTMLUniOverlayElement>(el: T) {
  const doc = document;
  connectListeners(doc);
  const overlayIndex = lastId++;
  el.overlayIndex = overlayIndex;
  if (!el.hasAttribute('id')) {
    el.id = `uni-overlay-${overlayIndex}`;
  }
}

export function createOverlay<T extends HTMLUniOverlayElement>(tagName: string, opts: object | undefined): Promise<T> {
  return customElements.whenDefined(tagName).then(() => {
    const doc = document;
    const element = doc.createElement(tagName) as HTMLUniOverlayElement;
    element.classList.add('overlay-hidden');

    // convert the passed in overlay options into props
    // that get passed down into the new overlay
    Object.assign(element, opts);

    // append the overlay element to the document body
    getAppRoot(doc).appendChild(element);

    return element.componentOnReady() as any;
  });
}

export function dismissOverlay(doc: Document, data: any, role: string | undefined, overlayTag: string, id?: string): Promise<boolean> {
  const overlay = getOverlay(doc, overlayTag, id);
  if (!overlay) {
    return Promise.reject(new Error('overlay does not exist'));
  }
  return overlay.dismiss(data, role);
}

export async function present(
  overlay: OverlayInterface
) {
  if (overlay.presented) {
    return;
  }
  overlay.presented = true;

  overlay.willPresent.emit();

  document.body.classList.add('uni-lock-scroll');
  overlay.el.classList.remove('overlay-hidden');

  overlay.didPresent.emit();

  if (overlay.keyboardClose) {
    overlay.el.focus();
  }
}

export async function dismiss(
  overlay: OverlayInterface,
  data: any | undefined,
  role: string | undefined
): Promise<boolean> {
  if (!overlay.presented) {
    return false;
  }

  overlay.presented = false;

  overlay.willDismiss.emit({ data, role });
  document.body.classList.remove('uni-lock-scroll');

  overlay.didDismiss.emit({ data, role });
  overlay.el.remove();
  return true;
}

export function isCancel(role: string | undefined): boolean {
  return role === 'cancel' || role === BACKDROP;
}

function createController<Opts extends object, HTMLElm extends HTMLUniOverlayElement>(tagName: string): OverlayController<HTMLElm> {
  return {
    create(options: Opts): Promise<HTMLElm> {
      return createOverlay(tagName, options) as any;
    },
    dismiss(data?: any, role?: string, id?: string) {
      return dismissOverlay(document, data, role, tagName, id);
    },
    async getTop(): Promise<HTMLElm | undefined> {
      return getOverlay(document, tagName) as any;
    }
  };
}

export const dialogController = /*@__PURE__*/createController<{ }, HTMLUniDialogElement>('uni-dialog');

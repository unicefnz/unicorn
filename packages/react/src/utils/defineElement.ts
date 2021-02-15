export function defineElement(cls: CustomElementConstructor): void {
  // We aren't running in a browser - don't define
  if (typeof window !== 'object' || typeof window.customElements !== 'object') return;

  // In dev mode, check this is only used with stencil elements
  if (process.env.NODE_ENV === 'development' && !(cls as any).is) throw new Error('Class does not have metadata set, this method can only be used for Stencil elements');

  // Define the element if it doesn't already exist
  if (!window.customElements.get((cls as any).is)) {
    window.customElements.define((cls as any).is, cls);
  }
}

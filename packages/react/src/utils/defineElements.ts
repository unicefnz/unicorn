export function defineElements(classArray: CustomElementConstructor[]): void {
  classArray.forEach((cls) => {
    if (process.env.NODE_ENV === 'development' && !(cls as any).is) throw new Error('Class does not have metadata set, this method can only be used for Stencil elements');
    window.customElements.define((cls as any).is, cls);
  });
}

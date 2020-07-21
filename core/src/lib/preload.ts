import type { HTMLStencilElement } from '@stencil/core/internal';

export async function preloadComponent(name: keyof HTMLElementTagNameMap): Promise<void> {
  if (typeof document !== 'undefined') {
    const el = document.createElement(name) as HTMLStencilElement;
    el.style.display = 'none';
    document.body.append(el);
    el.remove();

    await el.componentOnReady();
  }
}
export async function preloadComponents(tags: (keyof HTMLElementTagNameMap)[]): Promise<void> {
  await Promise.all(tags.map(t => preloadComponent(t)));
}

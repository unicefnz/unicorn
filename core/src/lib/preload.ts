import type { HTMLStencilElement as StencilEl } from '@stencil/core/internal';

const preloaded = new Set();

interface HTMLStencilElement extends StencilEl {
  connectedCallback?(): void;
}

export async function preloadComponent(name: keyof HTMLElementTagNameMap): Promise<void> {
  if (preloaded.has(name) || typeof document === 'undefined') return;

  const el = document.createElement(name) as HTMLStencilElement;

  if (typeof el.connectedCallback === 'function') el.connectedCallback();
  if (typeof el.componentOnReady === 'function') await el.componentOnReady();

  preloaded.add(name);
}
export async function preloadComponents(tags: (keyof HTMLElementTagNameMap)[]): Promise<void> {
  await Promise.all(tags.map(t => preloadComponent(t)));
}

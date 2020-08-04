import type { HTMLStencilElement } from '@stencil/core/internal';

const preloaded = new Set();

export async function preloadComponent(name: keyof HTMLElementTagNameMap): Promise<void> {
  if (preloaded.has(name) || typeof document === 'undefined') return;

  const el = document.createElement(name) as HTMLStencilElement;
  el.style.display = 'none';
  document.body.append(el);
  el.remove();

  await el.componentOnReady?.();

  preloaded.add(name);
}
export async function preloadComponents(tags: (keyof HTMLElementTagNameMap)[]): Promise<void> {
  await Promise.all(tags.map(t => preloadComponent(t)));
}

# Setup

This guide will setup Unicorn to use with plain HTML or any
[custom element compatible framework](https://custom-elements-everywhere.com/)

::: tip
If you're using React, check out the [React guide](react.md) instead.
:::

[[toc]]

## Step  1: Load elements

### Recommended: Async loader script

The async loader defines all Unicorn elements with a lazy-loader component, so that
you don't have to load every component up-front.

#### Using a bundler
```shell
npm install @unicorndesign/core
```
```javascript
import { applyPolyfills, defineCustomElements } from '@unicorndesign/core/loader';

// Optional, depending on your browser targets 
await applyPolyfills();

await defineCustomElements(window);
```

#### Using script tags
```html
<!-- Differential imports for better experience on modern browsers -->
<script type="module" src="https://unpkg.com/@unicorndesign/core@^1.1.0/dist/unicorn/unicorn.esm.js"></script>
<script nomodule src="https://unpkg.com/@unicorndesign/core@^1.1.0/dist/cjs/unicorn.cjs.js"></script>
```

### Advanced: Individual components

Unicorn ships with a *pure* custom-elements.js file which exports the bare custom elements. This can be
used if you want to load all components ahead of time, if you can tree shake the app, or for other
special use cases.

> Under the hood, this the method the `@unicorndesign/react` package uses to define components.
>
```ts
import { UniButton, UniDialog, defineCustomElements } from '@unicorndesign/core/dist/custom-elements';

// either define components individually
window.customElements.define('uni-button', UniButton);
window.customElements.define(UniDialog.is, UniDialog);

// or all at once
defineCustomElements(window);
```

## Step 2: Load theme 
Unicorn requires a global stylesheet to be loaded (for global typography and color vars,) see [Theming](../theming.md)
for more info.

```jsx
import '@unicorndesign/core/theming/prebuilt/default.css';

// OR
<link rel="stylesheet" href="https://unpkg.com/@unicorndesign/core@1.0.0/theming/prebuilt/default.css">
```

## Step 3: Polyfills
Polyfills are not included by default, however `@unicorndesign/core/loader` exposes an applyPolyfills method:

```typescript
import { applyPolyfills } from '@unicorndesign/core/loader';

await applyPolyfills();
``` 

## Step 4: Profit
Go ahead and use Unicorn! Build cool things!

```html
<uni-button icon>🦄</uni-button>
```

<uni-button icon>🦄</uni-button>

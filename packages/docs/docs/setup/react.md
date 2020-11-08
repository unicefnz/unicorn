# Setup using React

Because React [doesn't play nice](https://custom-elements-everywhere.com/#react) with Custom
Elements, we provide a thin abstraction layer to patch any issues.

Each React component is relatively simple, and is only responsible for ensuring the element
is defined, and passing props correctly.

::: warning Heads up
If you're using Next.js, you'll need to follow some [extra steps](./next.md)
:::

[[toc]]

## Step 1: Install

```shell script
npm install @unicorndesign/core @unicorndesign/react
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
Done! You're ready to use Unicorn.

```jsx
import React from 'react';
import { UniButton } from '@unicorndesign/react/UniButton';

export default () => (
  <UniButton icon>🦄</UniButton>
);
```

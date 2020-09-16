# 🦄 Unicorn React
![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d)
![Core CI Status](https://github.com/unicef-new-zealand/unicorn/workflows/Core%20CI/badge.svg)

Unicorn Design System is an open source design system built at UNICEF New Zealand.
We've built it with web components and stencil to ensure it works between frameworks.

## Getting Started

This package is a thin React layer for our web components. Each component is only responsible for
passing React data & events down to the underlying element.

> If you're not using React, check out [the core library](https://github.com/unicef-new-zealand/unicorn/tree/master/core).

Unicorn requires a global stylesheet to be loaded (for global typography and color vars,) documentation for this
is a work in progress. For now, please make sure it's loaded.

To install the library:

```shell script
npm install @unicorndesign/core @unicorndesign/react
```

Then, because underneath we're using web components underneath, you'll still need to load the
core library. This can be done in your entry file, or wherever is appropriate for your app.

```javascript
import '@unicorndesign/core/theming/prebuilt/default.css';
import { applyPolyfills, defineCustomElements } from '@unicorndesign/core/loader';

// Optional, depending on your browser targets 
await applyPolyfills();

await defineCustomElements(window);
```

Alternatively, you can use a script tag:

```html
<link rel="stylesheet" href="https://unpkg.com/@unicorndesign/core@1.0.0/theming/prebuilt/default.css">

<!-- Differential imports for modern browsers -->
<script type="module" src="https://unpkg.com/@unicorndesign/core@latest/dist/unicorn/unicorn.esm.js"></script>
<script nomodule src="https://unpkg.com/@unicorndesign/core@latest/dist/unicorn/unicorn.js"></script>
``` 

Done! You're ready to use Unicorn.

```jsx
import React from 'react';
import { UniButton } from '@unicorndesign/react';

export default () => (
  <UniButton icon>🦄</UniButton>
);
```

## Development notes
If you `npm link` this package into another app, you will
encounter react hook errors, because your app's react
is a separate instance to the one this uses.
The fix:
```
# Link the react here to the target's react. This is
# roughly how it would behave as a peer-dependency
npm link ~/consumer-app/node_modules/react
```
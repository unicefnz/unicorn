# Extra steps for Next.js

> Make sure you've already read the [installation steps for React](./react.md)

## Theme

The recommended way to load the theme is in `_app.tsx`, simply by importing it:
```js
import '@unicorndesign/core/theming/prebuilt/unicef.css';
```

## Transpilation

Unfortunately, Unicorn doesn't play nice with the CommonJS runtime
used during SSR.

The best way to work around this is using [`next-transpile-modules`](https://www.npmjs.com/package/next-transpile-modules)
to transpile Unicorn's incompatible code.

Additionally, because components are immediately imported, a HTMLElement shim must be present in SSG.

```js
const withTM = require('next-transpile-modules')(['@unicorndesign/core', '@unicorndesign/react', '@stencil/core']);

const nextConfig = {
  webpack: (config, { isServer, webpack }) => {
    if (isServer) {
      // Include a dummy HTMLElement replacement
      config.plugins.push(new webpack.DefinePlugin({
        HTMLElement: '(class {})'
      }));
    }
  }
};

// Make sure withTM is the innermost call, eg withOtherPlugin(withTM(nextConfig));
module.exports = withTM(nextConfig);
```

::: tip PRs welcome
This is currently a bit of a hack. If you have a suggestion for how to improve Next support,
we'd love to hear it!
:::
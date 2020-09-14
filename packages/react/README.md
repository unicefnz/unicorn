# @unicorndesign/react

## Usage
```
npm i @unicorndesign/react @unicorndesign/core
```

You must include the core styles to properly use Unicorn.
### Load Unicorn styles
Somewhere in your app, load `@unicorndesign/core/css/themes/unicef.css`
or another Unicorn theme.

### Load Unicorn components
In your app's entry file, add:
```js
import { defineCustomElements } from '@unicorndesign/core/loader';

defineCustomElements(window);
``` 

### Use React components
Then, once both the theme and web components are loaded, use
the React components as usual
```jsx
import React from 'react';
import { UniButton } from '@unicorndesign/react';

export default () => (
  <UniButton onClick={() => doSomething()}>Button!</UniButton>
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
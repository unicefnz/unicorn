# @uniform/react

## Usage
```
npm i @unicef-new-zealand/uniform-react @unicef-new-zealand/uniform-core
```

You must include the core styles to properly use uniform.
### Load Unform styles
Somewhere in your app, load `@unicef-newzealand/uniform-core/css/themes/unicef.css`
or another Uniform theme.

### Load Uniform components
In your app's entry file, add:
```js
import { defineCustomElements } from '@unicef-new-zealand/uniform-core/loader';

defineCustomElements(window);
``` 

### Use React components
Then, once both the theme and web components are loaded, use
the React components as usual
```jsx
import React from 'react';
import { UniButton } from '@unicef-new-zealand/uniform-react';

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
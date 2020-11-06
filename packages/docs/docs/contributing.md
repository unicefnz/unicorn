# Contributing

## Setting up a development environment

Unicorn is developed in a monorepo, which you can easily clone and setup
with the following:
```shell
# Clone Unicorn
git clone https://github.com/unicefnz/unicorn.git
cd unicorn
# Install root dependencies
npm install
# Bootstrap child projects (core, react, etc)
npm run bootstrap
```

## Caveat

If you use `npm link` to link `@unicorndesign/react` into another app, you
will encounter react hook errors, because of two conflicting react instances
being present. To fix this, `npm link` your target app's react back into this
library, like so:

```shell
# Link the react here to the target's react. This is
# roughly how it would behave as a peer-dependency
cd packages/unicorn
npm link ~/your-consumer-app/node_modules/react
```
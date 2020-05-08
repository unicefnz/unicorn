# @uniform/react

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
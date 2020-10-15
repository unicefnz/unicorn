# Custom Element Patch

## What is this??

By default, Stencil only generates a ESM build of custom-elements.
This patch is used to generate a CJS build afterwards. It's main job is to make SSR easier,
where it doesn't matter if the behaviour is different, it just needs to look ok to the compiler

## How is it used

```shell script
# Creates a CJS build of the custom-elements-bundle
rollup -c ce-patch/rollup.config.js
# Copy a package.json so that bundlers can resolve to the right file
cp ce-patch/package.json dist/custom-elements
```
# Contributing
Guidelines for how to contribute code to Unicorn, and how to use
our tooling & pipelines.

## Getting started
Unicorn is structured in a monorepo format. To get a development copy,
clone and bootstrap the monorepo:
```shell script
git clone https://github.com/unicef-new-zealand/unicorn.git # or however you prefer to clone

cd unicorn
npm install # Install root dependencies, including lerna CLI
lerna boostrap # Use lerna to bootstrap the packages
```

## Releasing a new version
First, make sure your working directory is clean. Then run `npm run create-release`.
This command calls `lerna version` to update any packages that have changed,
generates changelogs (and publishes them on github), commits, tags, and pushes the changes.

The main CI pipeline will then recognise this commit (from the tag) and trigger a
new release. This means running the tests again, building the packages, and publishing them.

This entire flow is loosely based on [Next.js's CI pipeline](https://github.com/vercel/next.js/blob/canary/.github/workflows/build_test_deploy.yml).

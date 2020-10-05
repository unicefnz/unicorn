#!/bin/bash

# Based on Next.js's CI pipeline. Thanks Vercel!
# https://github.com/vercel/next.js/blob/canary/publish-release.sh

# Get the tag for this exact commit
VERSION_TAG=$(git describe --exact-match 2> /dev/null || :)
PUBLISH_STRATEGY=from-git

# If the current commit contains "Chore: Recover" use the last available tag instead
if [[ $(git log -1 --pretty=tformat:%s) =~ "Chore: Recover" ]];then
  echo "Republishing from last tag"
  VERSION_TAG=$(git describe --abbrev=0 2> /dev/null || :)
  PUBLISH_STRATEGY=from-package
fi

# If there's no tag to publish to, exit early
if [[ $VERSION_TAG == "" ]];then
  echo "Nothing to publish, exiting.."
  exit 0;
fi

if [[ -z "$NPM_TOKEN" ]];then
  echo "No NPM_TOKEN, exiting.."
  exit 0;
fi


# We're ready to publish!

echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> ~/.npmrc

# If the tag contains "-beta" publish to the beta dist-tag
if [[ $VERSION_TAG =~ -beta ]];then
  echo "Publishing beta"
  npx lerna publish $PUBLISH_STRATEGY --dist-tag beta --yes

  # Make sure to exit script with code 1 if publish failed
  if [[ ! $? -eq 0 ]];then
    exit 1;
  fi
else
  echo "Did not publish beta"
fi

# Otherwise, publish to the latest tag!
if [[ ! $VERSION_TAG =~ -beta ]];then
  echo "Publishing stable"
  npx lerna publish $PUBLISH_STRATEGY --yes

  # Make sure to exit script with code 1 if publish failed
  if [[ ! $? -eq 0 ]];then
    exit 1;
  fi
else
  echo "Did not publish stable"
fi

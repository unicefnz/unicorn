#!/bin/bash

# Based on Next.js's CI pipeline. Thanks Vercel!
# https://github.com/vercel/next.js/blob/canary/publish-release.sh

git describe --exact-match

if [[ ! $? -eq 0 ]];then
  echo "Nothing to publish, exiting.."
  exit 0;
fi

if [[ -z "$NPM_TOKEN" ]];then
  echo "No NPM_TOKEN, exiting.."
  exit 0;
fi


echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" >> ~/.npmrc


COMMIT_TAG=$(git describe --exact-match 2> /dev/null || :)
if [[ $(git log -1 --pretty=tformat:%s) =~ "Chore: Recover" ]];then
  echo "Republishing from last tag"
  COMMIT_TAG=$(git describe --abbrev=0 2> /dev/null || :)
fi

if [[ $COMMIT_TAG =~ -beta ]];then
  echo "Publishing beta"
  ./node_modules/.bin/lerna publish from-git --dist-tag beta --yes

  # Make sure to exit script with code 1 if publish failed
  if [[ ! $? -eq 0 ]];then
    exit 1;
  fi
else
  echo "Did not publish beta"
fi

if [[ ! $COMMIT_TAG =~ -beta ]];then
  echo "Publishing stable"
  ./node_modules/.bin/lerna publish from-git --yes

  # Make sure to exit script with code 1 if publish failed
  if [[ ! $? -eq 0 ]];then
    exit 1;
  fi
else
  echo "Did not publish stable"
fi

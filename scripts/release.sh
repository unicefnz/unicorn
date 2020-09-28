#!/bin/bash

if [[ -z "$GH_TOKEN" ]];then
  echo "GH_TOKEN is required to create a GH release. Exiting..."
  exit 1;
fi


# Get the type of bump, either from env or input
SEMVER_BUMP=$1
if [[ -z "$SEMVER_BUMP" ]];then
  read -p "Bump type: " SEMVER_BUMP
fi

echo Creating a new ${SEMVER_BUMP} version

# This command should:
# - Update versions of packages
# - Generate a changelog
# - Create a github release with said changelog
# - Commit & tag changes
# - Push commit & tag
lerna version "${SEMVER_BUMP}" --preid next --create-release github --conventional-commits --changelog-preset eslint --message "Chore: Release %s 🎉"

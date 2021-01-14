#!/bin/zsh

SRC_PATH=../../core/src/components/
DST_PATH=docs/api/
DOC_LIST=$(find ../../core/src/components -name '*.md' -type f -print | sed "s|^${SRC_PATH}||")

for DOC in $DOC_LIST; do
  mkdir -p "$DST_PATH$(dirname "${DOC}")"

  # Rename index.md files to index.md
  if [[ $(basename $DOC) == 'readme.md' ]]; then
    DST_NAME="$(dirname $DOC)/index.md"
  else
    DST_NAME=$DOC
  fi

  cp "$SRC_PATH$DOC" "$DST_PATH$DST_NAME"
done

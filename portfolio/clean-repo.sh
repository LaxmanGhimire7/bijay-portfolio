#!/bin/bash
git filter-branch --tree-filter '
  rm -rf node_modules
  rm -rf client/node_modules
  rm -rf server/node_modules
  rm -rf client/build
' -f -- --all

git reflog expire --expire=now --all
git gc --prune=now --aggressive

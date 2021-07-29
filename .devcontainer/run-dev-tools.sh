#!/bin/bash

yarn install
yarn global add @ionic/cli
ionic config set -g npmClient yarn

ionic serve --external --lab
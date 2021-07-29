#!/bin/bash

yarn
yarn global add @ionic/cli
ionic config set -g npmClient yarn
ionic serve --external --lab
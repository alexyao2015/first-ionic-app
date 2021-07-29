#!/bin/bash

yarn install
yarn global add @ionic/cli
ionic config set -g npmClient yarn

yarn global add serve
FROM node:16-buster-slim AS dev_base

## Install requirements
RUN apt update \
    && apt install --no-install-recommends -y \
        curl \
        git \
        tzdata \
        ca-certificates \
        openssl

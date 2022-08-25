#!/bin/bash

docker build -t the-ruffian-bot:production --file Dockerfile .
docker tag the-ruffian-bot:production jwshive/the-ruffian-bot:latest
docker push jwshive/the-ruffian-bot:latest

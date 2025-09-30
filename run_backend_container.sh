#!/bin/bash

docker \
	run \
	-it \
	--name backend \
	--network blog-net \
	-e PORT=3001 \
	-e DATABASE_URL=mongodb://mongodb:27017/blog \
	-p 3001:3001 \
	blog-backend

#!/bin/bash

docker run -d --name mongodb --network blog-net mongo:6.0.4

if [ $? -ne 0 ] ; then
	docker start mongodb
fi	

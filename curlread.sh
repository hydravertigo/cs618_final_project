#!/bin/bash

SERVER="http://localhost:3000"

# Get our raw token from the webserver
RAWTOKEN=$(curl -X POST ${SERVER}/api/v1/user/login  -H "Content-Type: application/json" -d '{"username": "hergin", "password": "somepassword"}')

# Extract the actual token from the response and remove the " and "} from the start and ending, respectively
TOKEN=$(echo $RAWTOKEN | awk -F':' '{ print $2 }' | sed -e 's/^"//' -e 's/"}$//')

# Use our authentication token to view our posts
#curl ${SERVER}/api/v1/posts -H "Authorization: Bearer $TOKEN"

# This version of our request does not use authentication
curl ${SERVER}/api/v1/posts


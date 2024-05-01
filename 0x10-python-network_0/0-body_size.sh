#!/bin/bash
# Bash script that print send request and display the body size of the response
curl -sl "$1" | grep -i "Content-Length" | awk '{print $2}'
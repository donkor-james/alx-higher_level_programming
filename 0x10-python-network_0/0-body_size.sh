#!/bin/bask
#Bash script that print send request and display the body size of the response
curl -s "$1" | wc -c

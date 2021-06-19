#!/usr/bin/env bash
set -euxo pipefail

# set link value
link=http://applicant-test.us-east-1.elasticbeanstalk.com/

# get csrf token and translate it
key=$(curl -c cookie $link | grep -oP '"token" value="\K.+?[^"](?=")')
key=$(python translate.py $key)

# post form with csrf token and echo answer
answer=$(curl -b cookie -d "token=$key" -e $link $link | grep -oP '"answer">\K.+?(?=<)')
echo $answer

# remove cookie
rm -f cookie
#!/usr/bin/env bash
#/bin/bash

# get last source
git pull
sleep 2s

# maven compile
yarn install
yarn build

# PID=`jps| grep jar|grep -v grep|awk '{print $1}'`
PID=`netstat -anput|grep 3000|grep LISTEN|awk '{print $7}'`
echo $PID
if [ "" != "$PID" ]; then

  PID=${PID%/node}
  echo $PID
  echo "killing $PID"
  kill  $PID
else
  echo "not running!"
fi
sleep 5s

echo ">>> deploying >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"
# run
rm nohup.out
nohup yarn start &

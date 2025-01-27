#!/bin/zsh
#MAC：

if [ -f "/.dockerenv" ]; then
    echo $DEVICE_ID
else
    cat /mount/device_id
fi
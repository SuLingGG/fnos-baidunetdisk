#!/bin/zsh
if [ -f "/.dockerenv" ]; then
    echo $FN_VERSION
else
    cat /mount/fn_version
fi
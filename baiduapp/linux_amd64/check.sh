#!/bin/sh

# 请先执行此脚本检查sdk是否可用

cd $(dirname $0)
if [ ! -f baiduNas ]; then
echo 'Not Find ${pwd}/baiduNas'
exit
fi

if [ ! -f P2PClient ]; then
echo 'Not Find ${pwd}/P2PClient'
exit
fi

if [ ! -f libkernel.so ]; then
echo 'Not Find ${pwd}/libkernel.so'
exit
fi

chmod +x baiduNas
chmod +x P2PClient
./baiduNas & ./P2PClient . . .

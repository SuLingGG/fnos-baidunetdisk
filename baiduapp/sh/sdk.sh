#!/bin/zsh

# 参数说明：
# $1: IP地址
# $2: 端口号
# $3: MAC ID
# $4: 类型
# $5: 临时路径
# $6: 下载路径
# $7: 可执行文件路径
# $8: nas文件目录

# 参数校验
if [ "$#" -lt 7 ]; then
    echo "Error: 参数不足"
    exit 1
fi

if [ -z "$5" ] || [ -z "$6" ]; then
    echo "Error: 缺少路径参数"
    exit 1
fi

# 创建目录
mkdir -p "$5" && echo "文件夹 $5 创建成功"
mkdir -p "$6" && echo "文件夹 $6 创建成功"

# 检测端口
NUM=$(lsof -i :$2 | grep -v "grep" | wc -l)
echo "端口进程数: $NUM"

if [ "$NUM" -gt 2 ]; then
    echo "端口存在"
    exit 1
else
    echo "端口不存在"

    # 检查二进制文件
    if [ ! -x "$7" ]; then
        echo "Error: 文件 $7 不存在或不可执行"
        exit 1
    fi

    # 判断环境并设置日志输出
    if [ -f "/.dockerenv" ]; then
        LOG_OUTPUT="/proc/1/fd/1"
    else
        LOGFILE="$5/log/baiduNas.stdout"
        mkdir -p "$(dirname "$LOGFILE")"
        LOG_OUTPUT="$LOGFILE"
    fi

    # 执行命令并重定向日志
    $7 -ip $1 -port $2 -macid $3 -type $4 -tmppath $5 -downloadpath $6 -usbpath $8 -debug >> "$LOG_OUTPUT" 2>&1
    echo "脚本执行结束，日志保存在: $LOG_OUTPUT"
fi

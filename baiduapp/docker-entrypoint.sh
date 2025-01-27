#!/bin/bash

# 目标目录
TARGET_DIR="/app/db"
SOURCE_FILE="/app/temp/nas-file-manage.db"
TARGET_FILE="$TARGET_DIR/nas-file-manage.db"

echo "Checking if $TARGET_FILE exists..."

# 检查挂载目录中的文件是否存在
if [ ! -f "$TARGET_FILE" ]; then
    echo "$TARGET_FILE does not exist. Copying from $SOURCE_FILE..."
    if [ -f "$SOURCE_FILE" ]; then
        cp "$SOURCE_FILE" "$TARGET_FILE"
        echo "File copied successfully."
    else
        echo "Error: Source file $SOURCE_FILE does not exist. Exiting..."
        exit 1
    fi
else
    echo "$TARGET_FILE already exists. Skipping copy."
fi

# 启动 Nginx
service nginx start

# 启动 Java 应用
java -jar /app/app.jar
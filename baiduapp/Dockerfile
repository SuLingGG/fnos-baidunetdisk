# 使用 OpenJDK 基础镜像
FROM registry.baidubce.com/netdisk/openjdk:8-nginx

# 安装必要的工具和 Nginx
# RUN apt-get update \
#     && apt-get install -y nginx wget unzip procps lsof net-tools \
#     && apt-get clean \
#     && rm -rf /var/lib/apt/lists/*

# 设置时区为上海
#RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
#    && echo "Asia/Shanghai" > /etc/timezone

# 创建应用相关目录
RUN mkdir -p "/app/nas" \
    && mkdir -p "/app/来自：百度网盘" \
    && mkdir -p /app/sdk/tmp \
    && mkdir -p /usr/share/nginx/html \
    && mkdir -p /app/sh \
    && mkdir -p /app/db \
    && mkdir -p /app/static \
    && mkdir -p /app/logs \
    && mkdir -p /app/temp

# 拷贝 Java 应用程序和前端资源
COPY target/*.jar /app/app.jar
COPY sh/* /app/sh/
COPY db/nas-file-manage.db /app/temp/nas-file-manage.db
COPY linux_amd64/* /app/sdk/
COPY dist /app/static

# 拷贝 Nginx 配置
COPY nginx/app.conf /etc/nginx/conf.d/default.conf

# 暴露端口
EXPOSE 8080

# 启动脚本
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

# 设置默认工作目录
WORKDIR /app

# 启动 Nginx 和 Java 应用
CMD ["/bin/bash", "/app/docker-entrypoint.sh"]

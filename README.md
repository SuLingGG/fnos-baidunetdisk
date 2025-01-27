## 飞牛 OS 特供版百度网盘 Docker 镜像

### 文件结构

本项目文件结构如下：

```
.
├── baiduapp # 飞牛 OS 特供版百度网盘资源文件 (默认情况下请勿重命名)
├── docker-compose.yaml # 稍加修改可使用的 docker-compose.yaml 配置
├── docker-compose.yaml.orig # 从飞牛 OS 中提取的 docker-compose.yaml 源文件 (未经更改)
└── README.md # 本自述文件
```

### 如何使用

1. 克隆本项目；
2. 修改  `docker-compose.yaml` 文件，将 `DEVICE_ID` 变量修改为一个 40 位随机字符串，字符可选范围为 a\~f (小写) 0\~9（示例：40dadef0d361a251169d9cfb850f71c3abbdcec7b4）；

3. 执行 `docker compose up -d` 构建 Docker 镜像并启动容器；

4. 在未修改其他配置的情况下，百度网盘的 WEBUI 将在 8092 端口提供服务，网盘的默认下载路径为 `./downloads`

### 自行提取

如果你想尝试自行提取本项目的资源文件，可按以下步骤操作：

1. 安装 fnOS，在 WEBUI 中建立存储空间、开启 SSH、指定 Docker 使用的存储空间；
2. 在 fnOS 的应用商店下载并安装百度网盘 APP；
3. 登入 SSH 执行：

```shell
cd /var/apps/baiduapp/target
tar -zcvf /vol1/1000/baidunetdisk.tar.gz -h ./app/
```

之后便可在 “文件管理 - 我的文件” 中下载 `baidunetdisk.tar.gz` 压缩包。

### 注意事项

1. **目前 DEVICE_ID 变量作用未知，为百度账号安全考虑，请生成或修改上文 DEVICE_ID 为你自己独一无二的 DEVICE_ID！**
2. 本项目仅供学习交流使用，一切不当用途产生的后果本项目概不负责。
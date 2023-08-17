# 基础镜像
FROM node:18

# 设置工作目录
WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm install

# 将NestJS项目文件复制到容器中
COPY . .

# 暴露端口
EXPOSE 3000

# 运行应用程序
CMD [ "npm", "run", "dev" ]

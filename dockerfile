FROM node:22-alpine

WORKDIR /app

COPY package.json  ./

RUN npm config set registry https://mirrors.huaweicloud.com/repository/npm/

RUN npm install

EXPOSE 3000

# CMD ["npm", "run", "dev"]

CMD ["sh", "-c", "tail -f /dev/null"]
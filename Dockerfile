# Dockerfile

FROM node:20.12.2-alpine3.18
RUN mkdir -p /todo-app 
WORKDIR /todo-app
COPY package.json package-lock.json .
RUN npm install
COPY src ./src
COPY test ./test

ENTRYPOINT ["tail"]
CMD ["-f","/dev/null"]
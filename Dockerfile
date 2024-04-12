FROM node
WORKDIR /app
COPY . .
COPY package.json package-lock.json .
RUN npm install 
EXPOSE 5000
CMD ["npm","start"]

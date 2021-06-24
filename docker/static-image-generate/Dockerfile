FROM node:16-alpine

WORKDIR /home

RUN mkdir opencv-graphical-block-diagramming

COPY ./opencv-graphical-block-diagramming /home/opencv-graphical-block-diagramming

WORKDIR /home/opencv-graphical-block-diagramming

RUN npm install
RUN npm update chokidar

CMD ["npm","start"]
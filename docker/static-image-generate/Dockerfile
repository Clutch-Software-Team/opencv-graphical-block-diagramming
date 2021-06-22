FROM ubuntu:20.04

RUN apt-get update

RUN bash -c 'DEBIAN_FRONTEND=noninteractive apt install npm -y --force-yes'
RUN bash -c 'DEBIAN_FRONTEND=noninteractive apt install nodejs -y --force-yes'


COPY ./opencv-graphical-block-diagramming /home/
COPY ./entrypoint.sh /home/

WORKDIR /home/opencv-graphical-block-diagramming

RUN bash -c 'npm install'

ENTRYPOINT ["bash","-c","/home/entrypoint.sh"]

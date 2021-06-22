FROM ubuntu:20.04

RUN apt-get update

RUN bash -c 'DEBIAN_FRONTEND=noninteractive apt install git -y --force-yes'
RUN bash -c 'DEBIAN_FRONTEND=noninteractive apt install npm -y --force-yes'
RUN bash -c 'DEBIAN_FRONTEND=noninteractive apt install nodejs -y --force-yes'

WORKDIR /home
COPY ./entrypoint.sh /home

ENTRYPOINT ["bash","-c","/home/entrypoint.sh"]

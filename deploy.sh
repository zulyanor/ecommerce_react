#!/bin/bash

sudo docker stop react-tutorial
sudo docker rm react-tutorial
sudo docker rmi zulyano/react-tutorial:latest
sudo docker run -d --name react-tutorial -p 3000:80 zulyano/react-tutorial:latest

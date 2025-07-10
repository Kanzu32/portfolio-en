---
tags:
  - typescript
  - javascript
  - web
  - angular
  - python
  - server
title: 📺Stream App
---
# [📺GitHub Stream App](https://github.com/Kanzu32/angular-stream-app)

## Description
A web application for targeting relevant sections of a video stream.

Stream video over UDP or HTTP using Python and ffmpeg. The following formats are supported:
* MPEGTS: MPEG Transport Stream;
* MPEG1VIDEO: MPEG-1 video;
* MPEG2VIDEO: MPEG-2 video;
* XVID: Video Xvid;
* DASH: Dynamic Adaptive Streaming over HTTP (DASH).

The server part receives the stream, records and relays it to a web application in DASH format and also edits it at the user’s command. It uses Python, Flask and ffmpeg.

The Angular client part displays the stream to the user, provides the ability to start or stop recording, download, trim and view recorded files on the server.

## Features
* Broadcast in different formats;
* Record video from stream;
* Selecting a recorded video from the list;
* Video trimming;
* Converting stream and video formats;
* Downloading videos from the server.

## Technologies
* JavaScript;
* TypeScript;
* HTML;
* CSS;
* Python;
* ffmpeg;
* Angular.

## Screenshots
![[stream-1.png]]
![[stream-2.png]]
![[stream-3.png]]
![[stream-4.png]]
![[stream-5.png]]

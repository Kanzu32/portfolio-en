---
tags:
  - go
  - gamedev
  - datastructure
  - data-oriented
  - ecs
  - server
title: ⚔️Troublemakers Client-server PvP game
---
# [⚔️GitHub Troublemakers](https://github.com/Kanzu32/strategy-game)

## Description
Client-server turn-based strategy game "Troublemakers". Uses [self-writen implementation](/go-ecs) of the Enity-Component-System architectural pattern.

The game takes place between two players with a squad of several characters. Units have hit points and energy points. On his turn, the player can choose one of his units and spend any amount of energy on performing actions such as moving or attacking an opponent’s unit. Units have unique types of weapons, which determine the characteristics and type of attack.

* Dagger - increased damage to the back;
* Glaive - long-range attack in the area with the ability to hit allied units;
* Shield - increased health.

The server part performs data transfer between clients, logging, user authentication and opponent search.

## Features
* Multiple types of units;
* Settings for language, sounds and full screen mode;
* Supports local play on one device;
* User account system;
* ECS architecture.

## Technologies
* Golang;
* Data-oriented;
* Entity-Component-System;
* Ebitengine;
* Tiled;
* MongoDB.

## Screenshots
![[strategy-game-1.png]]
![[strategy-game-2.png]]
![[strategy-game-3.png]]
![[strategy-game-4.png]]
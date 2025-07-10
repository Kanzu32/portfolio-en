---
tags:
  - go
  - gamedev
  - datastructure
  - data-oriented
  - ecs
title: ⚙️Entity-Component-System
---
# [⚙️GitHub ECS](https://github.com/Kanzu32/go-ecs)

## Description
Implementation of the Enity-Component-System architectural pattern in Go.

The ECS pattern is widely used in game development, high-performance simulations, and other systems where performance and flexibility are important.

This library uses the sparse-set approach, which allows to perform operations on entities in O(1) time. Cache efficiency is also improved by storing data of the same type close to each other in memory.

The game [Troublemakers](/strategy-game) was created based on this library.

## Features
* Versions of objects for efficient disposal;
* Sparse-set approach.

## Technologies
* Golang;
* Data-oriented;
* Entity-Component-System.

## Object Pool Data Model
![[go-ecs-1.png]]


---
title: "CUDA flocking parallelization"
date: 2024-01-23T15:34:30-04:00
categories:
  - blog
tags:
  - C++
  - cuda
---

Here're my notes on [Project 1 - Flocking](https://github.com/CIS565-Fall-2022/Project1-CUDA-Flocking/blob/main/INSTRUCTION.md) as part of UPenn CIS 565: GPU Programming and Architecture. 

### @ Brief
The basic idea of boid flocking is to apply certain rules on the change of velocity of each boid based on the positions and velocities of its neighbors. Implementing on GPU differs from CPU. I'll explain the algorithm for CUDA parallelization I learned from this course and the reasons behind using a different algorithm than CPU version. 

#### - Start with CPU
Implementing on CPU is straight-forward, from brute-force by nested for loop along three axes, to a more work-efficient strategy: pre-processing the space into grid so that we only need to compute the boids in the relevant grid cells instead of checking all boids at every time step. Now when we move on to CUDA parallelization, the project introduce a new algorithm: sorting by grid cell index.   

#### - Move on to GPU 

In case you're also wondering ...

**Q:**  From brute force to pre-processing boids with uniform grid on GPU, what is the advantage of **sorting by grid cell index** strategy? It didn't occur to me. 

**A:**  In order to improve computing efficiency, dividing the space into **uniform grid** and pre-assigning a grid cell index to each boid is a common approach to reduce the number of neighbor checking. 

(For demonstration purpose, suppose there're `N` boids. The space is divided into `M` grid cells.)

To implement the pre-processing, naturally, on **CPU** I'd allocate a  `gridCellIndexArrary` of size `N` to store the grid cell index of each boid, and a dynamic array `particleIndexArray` for each grid cell, then iterate through each boid and add its index to the corresponding grid cell's `particleIndexArray`. 

During flocking, for each boid we can obtain which cell it belongs to by `gridCellIndexArrary` and then the boids enclosed can be accessed by `particleIndexArray` in constant time.

Now we move on to **GPU**. The seemingly general strategy above is no longer applicable. For the reasons 1) There's no dynamic array on GPU. 2) potential race condition. Point 1 is straightward. Let me explain a little more on point 2. Suppose we parallelize the strategy above on GPU, each thread is responsible for one boid to add its index to the corresponding grid cell's `particleIndexArray`. When two of the boids in the same cell grid are being added to the same `particleIndexArray` at the same time, the two corresponding threads might overwrite each other's results, leading to erroneous record. 

So we need to revise the pre-processing method to avoid 1) using dynamics array 2) letting multiple threads writing to shared memory. One of the viable approaches is by sorting. Same as on CPU, we first allocate a  `gridCellIndexArrary` of size `N` to store the grid cell index of each boid. Meanwhile, we also allocate a `particleIndexArray` of size `N` to store the boid cell index of each boid. Then **sorting by key** with `gridCellIndexArrary` as key and `particleIndexArray` as value, we can obtain the start and end boid indices of each grid cell at the junction of blocks of homogeneous values in sorted `gridCellIndexArrary`. Mapping the boid enclosed in those grid cells during flocking is similar to CPU version. 
---
layout: page
title: Efficient AI
description: Efficient neural modeling of visual information
img: assets/img/efficient_ai.jpg
importance: 1
related_publications: true
---

Designing neural network architectures is one of the most fundamental research topics in the field of AI. It involves crafting the appropriate structure and operation of AI to effectively and efficiently model specific problems and data. For visual information, convolutional neural network is the most popular architecture. It is specialized for learning local information, but has limitations in modeling global information. While simply stacking more layers can achieve desirable performance by increasing receptive field of neural networks, it results in unnecessarily large networks. Therefore, we have designed neural architectures with attention mechanisms, focusing on not only fully utilizing information (i.e., both local and global information) in images but also optimizing efficiency in terms of both the number of model parameters and computational complexity {% cite kim2018deep kim2020mamnet kim2022joint kim2024diversify %}. We have also designed efficient neural networks with recursive or multi-exit structures {% cite choi2021volatile jeon2020larvanet %}. In addition, we have explored network pruning for image compression models {% cite kim2020efficient %}.




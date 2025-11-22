---
title: Introduction to Big O Notation
summary: An generalized introduction to Big O Notation, in the context of software development. 
draft: true
date: 2025-11-22
---

In computer science, or just writing software in general, being able to understand how efficient your code is matters as much as the code itself. In particular, when it comes to performance, it's important to understand how your code scales with the size of the input data. This is where the concept of Big O Notation comes in: it's a way of quantifying the efficiency of your code.

Big O notation is, fundamentally, a mathematical expression that describes the performance of an algorithm or data structure as a function of its input size. When describing performance, it is often used to understand the worst-case scenario, as a means to understand how operations scale. 

## How Big O Notation Works

To understand Big O notation, it's important to first understand what it means to be efficient. Efficiency is defined as the ability of an algorithm or data structure to perform its task in a reasonable amount of time and memory.

Big O notation is a way to understand this efficiency. It is made up of two parts: time complexity and space complexity. Between these two measures, you're able to describe how long it takes to run an algorithm or how much memory it uses.

When referring to Big O notation, it's important to remember that it's a mathematical expression, not a concrete number. Since it's used to describe performance, it's important to understand how the expression changes as the input size changes. That's why the notation is written as `O(f(n))`, where `f(n)` is the function that describes performance and `n` is the input size.
---
title: Introduction to Big O Notation
summary: An generalized introduction to Big O Notation, in the context of software development.
date: 2025-11-22
---

Understanding how efficient your code is, is crucial to writing high-quality software. As data scales, it becomes more
important to understand how the performance of your code scales as well. This is where the concept of **Big O Notation**
comes in.

At its core, Big O notation is a mathematical expression that describes the performance of an algorithm or data
structure as a function of its input size. It primarily focuses on the *worst-case scenario*, providing a high-level
understanding of how operations will scale.

## How Big O Notation Works

Big O notation quantifies the efficiency of your code. This efficiency is measured in two ways: **time complexity** and
**space complexity**. Time complexity describes how the execution time scales as the input size increases, while space
complexity how memory usage scales.

It's important to remember that Big O notation is an *expression* describing performance, not an exact number. It is
written as `O(f(n))`, where `f(n)` is the function describing the performance of your algorithm, and `n` is the size of
the input.

## Time Complexity

Time complexity measures the amount of time it takes an algorithm to execute as a function of its input size. It's not
about assessing the seconds or milliseconds it takes, which vary based on the hardware and software being used. Instead,
it focuses on how the execution time grows as the input size increases.

When talking about time complexity, the focus is always on the **worst-case scenarios**. This gives an upper-bound on
how long an algorithm *could* take, giving you a way to predict how long it will take in practice.

As an example, let's say you're searching for a number in a list:

```js
function findNum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === target) return i;
	}
	return -1;
}
```

To analyze its time complexity:

- **Best Case**: If the `target` is the first element in the `nums` array, the loop will run only once, and the
  algorithm will return immediately. This would be a **constant** time operation.
- **Worst Case**: If the `target` is the last element in the array, or not present at all, the loop will have to iterate
  through *every* element in the list. If the list has `n` elements, the function will perform `n` comparisons in the
  worst case.

Therefore, the **time complexity** of the function `findNum` is `O(n)`, where `n` is the number of elements in the
`nums` array. This means that, as the size of the array grows, the algorithm will also grow linearly in the wost-case
scenario.

## Space Complexity

Space complexity measures the amount of memory an algorithm needs to run. Like time complexity, it doesn't measure the
exact amount of memory used but rather the growth of memory usage as the input size increases. We typically consider the
**auxillary space complexity**, which is the extra space an algorithm uses *beyond* the input size itself.

Let's look at a function that creates a new list containing the squares of numbers in a given list:

```js
function sumNums(nums) {
	let total = 0;
	for (let num of nums) {
		total += num * num;
	}
	return total;
}
```

Since we only care about *additional* space being used, we can ignore the initial space required to store the input
array. Therefore, the **space complexity** of the function would be `O(1)`, since the space required to store the total
is constant regardless of the size of the input.

## Common Big O Notations

Now that we looked into time and space complexity, we can explore the common Big O Notations. You might have noticed the
reference to `O(1)` and `O(n)` in the examples above. These are common Big O Notations, but there are many more.

![Big O Notation Chart](https://paper-attachments.dropbox.com/s_2D428973624E7FC84C7D69D11421DE762BEA6B6F3361231FCDCAE0425D14526F_1664885448372_Untitled.drawio+17.png)

In the chart above, you can see some of the most common Big O Notations. In order from best to worst, they are:

- **Constant** (`O(1)`): When growth is independent of the input size.
- **Logarithmic** (`O(log n)`): As the input size increases, the growth rate decreases.
- **Linear** (`O(n)`): The input size increases proportionally to the growth rate.
- **Quadratic** (`O(n^2)`): As the input size increases, the growth rate increases proportionally to the square of the
  input size.
- **Exponential** (`O(2^n)`): When the input size increases, the growth rate doubles each time.
- **Factorial** (`O(n!)`): For each additional input element, the number of operations multiplies by the size of the
  input.

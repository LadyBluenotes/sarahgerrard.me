---
title: Introduction to Big O Notation
summary: An generalized introduction to Big O Notation, in the context of software development.
tags: [ 'DSA' ]
date: 2025-12-12T10:00:00.000Z
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
complexity is how memory usage scales.

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
  algorithm will return immediately. This would be a **constant** time operation, as it doesn't depend on the size of
  the
  input.
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
array. Therefore, the **space complexity** of the function would be constant, since the extra space required is
independent
of the size of the input.

## Common Big O Notations

Now that we looked into time and space complexity, we can explore the common Big O Notations. You may have seen the
terms `O(1)` or `O(n)`, these are common Big O Notations, but there are many more.

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

## Trade-Offs and Real-World Considerations

Big O notation is a great way to understand how efficient your code is, but it's ultimately just a theoretical model. In
practice, choosing an algorithm or data structure requires making tradeoffs between performance and complexity. The "
best" choice in one scenario might be suboptimal in another, depending on factors beyond just Big O.

### Time vs Memory

One of the most common trade-offs is between the time and space complexity, or *memory usage*. Often, you can make an
algorithm faster by using more memory, or use less memory at the expense of speed.

**Example**: Memoization

Consider a recursive function that calculates Fibonacci numbers. The naive approach has a time complexity of `O(2^n)`
due to the redundant calls to the function itself. By using **memoization**, which is storing previously computed values
in memory, we can reduce the time complexity of it to `O(n)`. However, this comes at the cost of increased space
complexity, as we need to store the previously computed values.

### Simplicity vs Optimization

Sometimes, a more efficient algorithm might be significantly more complex to implement and maintain. Depending on the
use case, the trade-off might be worth it.

**Example**: Sorting

For a small list (eg. fewer than 10-20 elements), a simple `O(n^2)` like an Insertion Sort can often outperform a more
complex `O(n log n)` algorithm like Merge Sort due to the overhead of recursion, setup, and constant factors associated
with the "more efficient" algorithm. The simplicity might also make it easier to debug and understand for smaller
datasets
where the performance difference is not as important.

### Readability vs Maintainability

While optimizing can be important, it's also important to consider the readability and maintainability of your code. To
highly optimize for Big O, you might sometimes create code that is less readable or harder for other developers to
understand and maintain. There's always a balance to strike between raw performance and the clarity of your code.

### Specific Use Cases and Data Characteristics

The "worst-case" scenario, which Big O describes, might be very rare for a specific application. An algorithm with a
poor worst-case but excellent average-case performance may be perfectly acceptable if the worst-case is unlikely to
occur in practice.

**Example**: Hash Tables

Hash tables have an average time complexity of `O(1)` for insertions and lookups, making them ideal for storing and
retrieving data. However, in the worst-case scenario, such as too many hash collisions, their performance can degrade to
`O(n)`. Despite this worst-case, their ability to be fast in most operations stil makes them a good choice in many
applications.

### Premature Optimization

One of the most important things to consider is premature optimizations. It's easy to get caught up in trying to
optimize
every possible scenario, but it's often better to write clear, correct, and readable code first, and optimize only if
bottlenecks are identified. This helps avoid unnecessary complexity and makes it easier to understand the performance
of your code. Finally, over-optimizing code that isn't a bottleneck can introduce complexity without providing any real
benefit.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A550%2F1*HvzirdkMKDMsTGEkxdl-FQ.png&f=1&nofb=1&ipt=f58333313f6fe9262177b826c862ffa2ec0e7e352e8297fe58352de1a40060ab)

## Conclusion: Balancing Efficiency and Practicality

Understanding Big O notation is more than just learning a set of mathematical expressions; it's an important tool for
any developer to have in their toolbox.

While we've explored how Big O quantifies an algorithm's performance in terms of time and space complexity, it's
important to remember that it's just a theoretical model. In the real-world, trade-offs are inevitable and the "best"
or "optimal" solution might not always be the most efficient in terms of both time and space.

By integrating the ideas of Big O notation into your development process, you gain a better understanding on how to
evaluate your code, make informed architectural decisions, and build applications that perform reliably as the system
scales. By continuing to learn and practice analyzing the complexity of the functions you write and encounter, you'll
soon be able to find yourself thinking of these concepts naturally.
---
title: Implementing a Linked List in JavaScript
summary: ""
date: 04-26-2023
tags: ["data structures", "javascript", "dsa"]
---

A linked list is a popular data structure used in computer science and programming for sorting and managing collections of data.

Implementing a linked list in your code requires a bit more than simply declaring like you would with an array. You'll need to start by creating a `Node` class to represent individual nodes in the list as well as a `LinkedList` class to manage nodes and their connections. In this article, we'll explore how to write these classes in JavaScript, and how to use them to add, insert, remove, and various other functions that could be useful with a linked list. By the end of this article, you'll have a solid understanding of how to implement and use linked lists in your own code.

## Creating the classes

As mentioned above, you need to create a `Node` class that represents the individual nodes in the linked list. The `Node` class has two properties:

- `data`: represents the value stored in the node
- `next`: represents a reference to the next node in the linked list.

The constructor function takes a `data` parameter, which is used to initialize the `data` property, and sets the `next` property to `null` by default.

```javascript
// Define the class for a Node
class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
```

Next is to define the `LinkedList` that manages the nodes and their connections. The `LinkedList` class has 3 properties:

- `head`: represents the first node
- `tail`: represents the last node
- `size`: represents the number of nodes present

By default, all 3 properties are set to `0` or `null`.

```javascript
// Define the class for the Linked List
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}
}
```

With these classes defined, you can start using them to create and manipulate linked lists in your code. For example, you can create a new linked list like this:

```javascript
const myList = new LinkedList();
```

## The common functions

Some common functions can be implemented when using a linked list:

- `add(data)`: add an element to the end of the linked list
- `insert(data, position`: Insert an element at a specific position/
- `remove(data)`: Remove the first occurrence of an element.
- `indexOf(data)`: Find the position of the first occurrence of an element.
- `isEmpty()`: Check if the linked list is empty.
- `size()`: Return the number of elements in the linked list.
- `getHead()`: Return the head node.
- `getTail()`: Return the tail node.
- `clear()`: Remove all elements in the linked list.

As you read on, you will learn more about these functions and how they are implemented in code. By understanding how these functions work, you can better manipulate and manage the data stored within a linked list.

### **Adding a node to the end**

1. The function will take the value of the new node being added to the linked list.
2. A new `Node` object is created with the `data` value passed into the function.
3. If the linked list is empty (`this.head` is `null`), the new node becomes the first and only node in the list. Both `this.head` and `this.tail` are set to the new node.
4. If the linked list is not empty, the `next` property of the current tail node is set to the new node, and `this.tail` is updated to the point to the new node, effectively making it the new tail of the list.
5. The `size` property of `LinkedList` is incremented to reflect the addition of the new node.

```javascript
add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.size++;
  }
```

### **Insert a node at a specific position**

1. The function takes two parameters: `data`, the value of the new node being inserted, and `position`, which is the index at which the new node should be inserted.
2. If the `position` is less than 0 or greater than the size of the linked list, the function returns `false`, indicating that the inspection was not successful.
3. A new `Node` object is created with the `data` value passed into the function.
4. If `position` is equal to the size of the linked list, the new node becomes the tail of the linked list. The `next` property of the current tail node is set to the new node, and `this.tail` is updated to point to the new node.
5. If `position` is 0, the new node becomes the head of the linked list. The `next` property of the new node is set to the current head node, and `this.head`, is then updated to point to the new node.
6. If `position` is somewhere in the middle of the linked list, the function uses a loop to find the node that comes before the position where the new node should be inserted (`previous`) and the node that comes after the position (`current`).
7. The `next` property of the new node is set to `current`, and the `next` property of `previous` is set to the new node. This effectively inserts the new node between `previous` and `current`.
8. The `size` property of the `LinkedList` object is incremented to reflect the addition of the new node.
9. The function returns `true` to indicate that the insertion was successful.

```javascript
insert(data, position) {
    if (position < 0 || position > this.size) {
      return false;
    }

    const newNode = new Node(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else if (position === this.size) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;

      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      newNode.next = current;
      previous.next = newNode;
    }

    this.size++;
    return true;
  }
```

### Remove a node from the linked list

1. Declare variables `current` and `previous`. These are used to keep track of the current and previous nodes in the linked list as the method iterates through the list to find the node to remove. `Current` is set to the head of the linked list, and `previous` is set to `null`.
2. Loop through the linked list while `current` is _not_ `null`.
3. If the `data` of `current` is equal to the `data` parameter passed into the function, the node to be removed has been found.
   1. Check if `previous` is null. This will determine if the node to be removed is the head of the linked list. If it is, the `head` is set to the current node's `next` property.
   2. If `previous` is not null, we need to update the `previous.next` to `current.next`. This effectively skips over the current node and points directly to the node that comes after it, removing it from the linked list.
   3. Decrement the `size` property of the linked list.
   4. Return `data` of the removed node (when `current === data`).

4. If no match is found, the method returns `null`.

```javascript
remove(data) {
    let current = this.head;
    let previous = null;

    while (current) {
      if (current.data === data) {
        if (previous === null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        this.size--;
        return current.data;
      }
      previous = current;
      current = current.next;
    }

    return null;
  }
```

### Find the first occurrence of an element in the list

1. Declare variables `current` and `index`. These variables are used to keep track of the current node and its position in the linked list as the method iterates through the linked list to find the index of the node that matches the parameter.
2. Set `current` to the head of the linked list and the index to `0`.
3. Loop through the linked list while `current` is not null.
   1. If the `data` of `current` is equal to the data parameter passed into the function, the node whose index we are looking for has been found.
   2. Return `index`, as it represents the position of the desired node.

4. As long as the current data node is not found, move to the next node in the linked list and increment the index by 1.
5. If no match is found, the method returns `-1`.

```javascript
indexOf(data) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === data) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }
```

### Simple helper methods

```javascript
// Check if list is empty
isEmpty() {
    return this.size === 0;
  }

// Return the number of elements
  size() {
    return this.size;
  }

// Return the head node
  getHead() {
    return this.head;
  }

// Return the tail node
  getTail() {
    return this.tail;
  }

// Remove all elements
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
```

## Conclusion

Linked lists are an important data structure used in computer science and programming. In this article, we covered how to create a Node class and a LinkedList class in JavaScript, and how to use them to add, insert, remove, and perform various other functions on a linked list. By understanding the basic principles of linked lists and the common functions used to manipulate them, you will be better equipped to use them in your own code.

If you're interested in learning more about linked lists and their advanced concepts and techniques, be sure to check out my upcoming blog posts. I'll be diving deeper into topics specific to linked lists, such as doubly linked lists and circular linked lists, and more. With this knowledge, you'll have a strong foundation for using linked lists in your own programming projects. Stay tuned for more!

# JavaScript Mastery Practice Sheet

> Goal:
> Become strong enough in JavaScript to write code independently, build logic, solve problems, debug efficiently, and create real-world projects.

---

# SECTION 1 — JavaScript Basics & Syntax

## Variables, Conditions, Loops, Functions

### Q1

Print `"Hello World"` 5 times using a loop.

---

### Q2

Create an age variable:

* if age >= 18 → print `"Adult"`
* else → print `"Minor"`

---

### Q3

Print all even numbers from 1 to 100.

---

### Q4

Create a function:

```js
function square(num)
```

that returns the square of a number.

---

### Q5

Find the sum of the array:

```js
[1,2,3,4,5]
```

---

### Q6

Find the largest number in an array.

---

### Q7

Reverse a string:

```js
"javascript"
```

---

### Q8

Count the vowels in a string.

---

### Q9

Check whether a string is a palindrome or not:

```txt
madam → true
hello → false
```

---

### Q10

Find the factorial of a number.

---

### Q11

Reverse a number:

```js
1234 → 4321
```

---

### Q12

Check whether a number is an Armstrong number:

```txt
153 → true
123 → false
```

---

### Q13

Check whether all characters in a string are unique:

```js
"abcde" → true
"hello" → false
```

---

### Q14

Find the most frequently occurring character in a string.

---

# SECTION 2 — Arrays & Strings Logic

### Q15

Merge two arrays without duplicate values:

```js
[1,2,3]
[2,3,4]

Output:
[1,2,3,4]
```

---

### Q16

Rotate an array:

```js
[1,2,3,4,5]
k = 2

Output:
[4,5,1,2,3]
```

---

### Q17

Check whether a sentence is a palindrome:

```js
"A man a plan a canal Panama"
```

Ignore spaces and letter casing.

---

### Q18

Compress a string:

```js
"aaabbcc"

Output:
"a3b2c2"
```

---

### Q19

Count consecutive groups in an array:

```js
[1,2,3,5,6,8]

Output:
2
```

Explanation:

* (1,2,3)
* (5,6)

---

### Q20

Create a function that returns only unique elements:

```js
[1,2,2,3,4,4]

Output:
[1,3]
```

---

### Q21

Remove duplicate elements from an array.

---

### Q22

Find the second largest number in an array.

---

### Q23

Count character frequency:

```js
"banana"
```

Expected Output:

```js
{
  b:1,
  a:3,
  n:2
}
```

---

### Q24

Check whether two strings are anagrams.

---

### Q25

Sort an array manually.

> Do not use `sort()`.

---

### Q26

Find the missing number:

```js
[1,2,3,5]
```

---

### Q27

Count the total number of words in a sentence.

---

### Q28

Find the longest word in a string.

---

### Q29

Find the first non-repeating element in an array:

```js
[4,5,1,2,1,2,4]

Output:
5
```

---

# SECTION 3 — Intermediate Problem Solving

### Q30

FizzBuzz:

* multiples of 3 → `"Fizz"`
* multiples of 5 → `"Buzz"`
* multiples of both → `"FizzBuzz"`

---

### Q31

Check whether a number is prime.

---

### Q32

Print the Fibonacci series.

---

### Q33

Find the maximum depth of a nested array:

```js
[1,[2,[3,[4]]]]

Output:
4
```

---

### Q34

Implement your own custom `flat()` function.

---

### Q35

Invert an object:

```js
{
  a:1,
  b:2
}

Output:
{
  1:"a",
  2:"b"
}
```

---

### Q36

Check whether brackets are balanced:

```js
"({[]})" → true
"({[})" → false
```

---

### Q37

Find the maximum sum of a subarray.
(Kadane’s Algorithm)

```js
[-2,1,-3,4,-1,2,1,-5,4]

Output:
6
```

---

### Q38

Create a function:

```js
chunkArray(arr,size)
```

Example:

```js
chunkArray([1,2,3,4,5],2)

Output:
[[1,2],[3,4],[5]]
```

---

### Q39

Transpose a matrix:

```js
[
 [1,2],
 [3,4]
]

Output:
[
 [1,3],
 [2,4]
]
```

---

### Q40

Find the majority element in an array.
(element appearing more than n/2 times)

---

# SECTION 4 — JavaScript Core Concepts

### Q41

Implement your own custom `map()`.

---

### Q42

Implement your own custom `filter()`.

---

### Q43

Implement your own custom `reduce()`.

---

### Q44

Demonstrate deep copy vs shallow copy.

---

### Q45

Create an example of closure.

---

### Q46

Create a counter function using closure:

```js
const counter = createCounter()

counter() // 1
counter() // 2
```

---

### Q47

Implement a debounce function.

---

### Q48

Create your own custom `includes()` function.

---

### Q49

Flatten a nested array:

```js
[1,[2,[3,4]],5]
```

---

### Q50

Group objects by property:

```js
users by age
```

---

### Q51

Implement recursive binary search.

---

### Q52

Implement infinite currying:

```js
sum(1)(2)(3)(4)()
```

---

### Q53

Implement memoization.

---

### Q54

Create a deep clone function.

---

### Q55

Deeply freeze an object.

---

# SECTION 5 — Async JavaScript & Advanced Thinking

### Q56

Simulate custom `setTimeout()` logic.

---

### Q57

Create a mini event emitter.

---

### Q58

Implement an LRU Cache.

---

### Q59

Explain and manually implement promise chaining.

---

### Q60

Create an async task queue:

* only 2 tasks should run at a time
* remaining tasks should wait in queue

---

# SECTION 6 — Real Developer Thinking

### Q61

Build a shopping cart system:

* add item
* remove item
* calculate total
* update quantity

---

### Q62

Implement Undo/Redo functionality.

---

### Q63

Build a browser history simulation.

---

### Q64

Create a typing speed tester.

---

### Q65

Think about and try implementing a simplified virtual DOM.

---

# SECTION 7 — Mini Projects

### Q66 — Counter App

Features:

* Increment
* Decrement
* Reset

---

### Q67 — To-Do App

Features:

* Add task
* Delete task
* Mark completed

---

### Q68 — Digital Clock

---

### Q69 — Calculator

---

### Q70 — Password Generator

---

### Q71 — Weather App

(Use an API)

---

### Q72 — Quiz App

---

### Q73 — Notes App using localStorage

---

# HOW TO PRACTICE

For every question:

## Step 1

Understand the problem.

## Step 2

Think of a brute force approach.

## Step 3

Dry run the logic.

## Step 4

Write edge cases.

## Step 5

Code the solution.

## Step 6

Think of a cleaner or optimized approach.

---

# GOLDEN RULES

❌ Avoid:

* Copy-pasting
* Tutorial binge-watching
* Looking at solutions immediately

✅ Focus on:

* Debugging
* Console practice
* Dry runs
* Rewriting code in a cleaner way
* Building logic independently

---

# FINAL GOAL

Become a developer who can:

* write code independently
* solve problems confidently
* debug efficiently
* build real projects
* deeply understand JavaScript instead of memorizing syntax

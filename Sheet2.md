# JavaScript Mastery Practice Sheet — Phase 2

> Goal:
> Master ES6+, DOM, Events, Browser APIs, Async JavaScript, Modules, and Advanced JavaScript concepts deeply enough to build real-world frontend applications independently.

---

# SECTION 1 — ES6+ Fundamentals

## Variables & Modern Syntax

### Q1

Demonstrate the differences between:

```js
var
let
const
```

Show:

- scope
- redeclaration
- reassignment

---

### Q2

Swap two variables without using a third variable.

Using destructuring.

---

### Q3

Extract values from:

```js
const user = {
    name: "Rasshi",
    age: 20
};
```

using object destructuring.

---

### Q4

Extract values from:

```js
const arr = [10,20,30];
```

using array destructuring.

---

### Q5

Create a function using default parameters:

```js
function greet(name = "Guest")
```

---

### Q6

Create a function using rest parameters:

```js
sum(...numbers)
```

---

### Q7

Merge two arrays using spread operator.

---

### Q8

Clone an object using spread operator.

---

### Q9

Use optional chaining:

```js
user?.address?.city
```

---

### Q10

Demonstrate the difference between:

```js
??
||
```

---

# SECTION 2 — DOM Fundamentals

### Q11

Select an element using:

```js
getElementById()
```

---

### Q12

Select an element using:

```js
querySelector()
```

---

### Q13

Select multiple elements using:

```js
querySelectorAll()
```

---

### Q14

Change text content dynamically.

---

### Q15

Change HTML content dynamically.

---

### Q16

Change CSS properties dynamically.

---

### Q17

Create a new element using:

```js
document.createElement()
```

---

### Q18

Append an element to DOM.

---

### Q19

Insert an element before another element.

---

### Q20

Remove an element from DOM.

---

### Q21

Replace an existing element.

---

### Q22

Create a dynamic list from an array.

---

### Q23

Create a dynamic table using JavaScript.

---

### Q24

Create and append an image dynamically.

---

### Q25

Build a reusable card component using DOM methods.

---

# SECTION 3 — Event Handling

### Q26

Handle a button click.

---

### Q27

Count button clicks.

---

### Q28

Display typed text live while user types.

---

### Q29

Detect Enter key press.

---

### Q30

Detect Escape key press.

---

### Q31

Prevent form submission.

---

### Q32

Build a dark mode toggle.

---

### Q33

Implement show/hide password.

---

### Q34

Track mouse position.

---

### Q35

Detect window resize.

---

### Q36

Create a character counter.

---

### Q37

Implement event bubbling example.

---

### Q38

Implement event capturing example.

---

### Q39

Explain event propagation.

---

### Q40

Implement event delegation.

---

# SECTION 4 — Browser APIs

### Q41

Store username in localStorage.

---

### Q42

Retrieve username from localStorage.

---

### Q43

Delete data from localStorage.

---

### Q44

Build a page refresh counter.

---

### Q45

Use sessionStorage.

---

### Q46

Read browser information using:

```js
navigator
```

---

### Q47

Read URL information using:

```js
location
```

---

### Q48

Implement a copy-to-clipboard button.

---

### Q49

Use Geolocation API.

---

### Q50

Build a stopwatch using:

```js
setInterval()
```

---

### Q51

Build a countdown timer.

---

### Q52

Create a digital clock.

---

### Q53

Use Notification API.

---

### Q54

Read online/offline status.

---

### Q55

Detect battery information (where supported).

---

# SECTION 5 — Asynchronous JavaScript

### Q56

Create a timer using:

```js
setTimeout()
```

---

### Q57

Demonstrate callback hell.

---

### Q58

Convert callback-based code to Promise-based code.

---

### Q59

Create your own Promise.

---

### Q60

Use:

```js
.then()
.catch()
.finally()
```

---

### Q61

Use:

```js
async
await
```

---

### Q62

Fetch data from a public API.

---

### Q63

Handle API errors gracefully.

---

### Q64

Use:

```js
Promise.all()
```

---

### Q65

Use:

```js
Promise.race()
```

---

### Q66

Use:

```js
Promise.allSettled()
```

---

### Q67

Implement retry logic for failed API requests.

---

### Q68

Build a loading spinner for API requests.

---

### Q69

Cancel requests using AbortController.

---

### Q70

Build a mini API service layer.

---

# SECTION 6 — JavaScript Modules

### Q71

Create:

```js
math.js
```

and export functions.

---

### Q72

Import named exports.

---

### Q73

Import default exports.

---

### Q74

Import everything using:

```js
import * as
```

---

### Q75

Create a utility module.

---

### Q76

Split a project into multiple modules.

---

### Q77

Create constants module.

---

### Q78

Create API module.

---

### Q79

Create storage module.

---

### Q80

Create reusable helper functions module.

---

# SECTION 7 — Advanced JavaScript

### Q81

Explain Execution Context.

---

### Q82

Explain Call Stack.

---

### Q83

Visualize Event Loop.

---

### Q84

Demonstrate Hoisting.

---

### Q85

Demonstrate Temporal Dead Zone.

---

### Q86

Explain:

```js
this
```

in every context.

---

### Q87

Implement custom:

```js
bind()
```

---

### Q88

Implement custom:

```js
call()
```

---

### Q89

Implement custom:

```js
apply()
```

---

### Q90

Implement custom:

```js
map()
```

---

### Q91

Implement custom:

```js
filter()
```

---

### Q92

Implement custom:

```js
reduce()
```

---

### Q93

Implement custom:

```js
forEach()
```

---

### Q94

Implement Observer Pattern.

---

### Q95

Implement Publish-Subscribe Pattern.

---

### Q96

Implement Singleton Pattern.

---

### Q97

Create a mini state manager.

---

### Q98

Implement memoization.

---

### Q99

Implement debounce.

---

### Q100

Implement throttle.

---

# SECTION 8 — Real Frontend Projects

### Q101 — Image Slider

Features:

- Next
- Previous
- Auto Slide

---

### Q102 — Accordion

Features:

- Expand
- Collapse

---

### Q103 — Modal Popup

Features:

- Open
- Close
- Escape Key Support

---

### Q104 — Live Search Filter

---

### Q105 — Infinite Scroll

---

### Q106 — Weather Dashboard

Using Fetch API.

---

### Q107 — GitHub Profile Finder

Using GitHub API.

---

### Q108 — Movie Search App

Using OMDb API.

---

### Q109 — Expense Tracker

Using localStorage.

---

### Q110 — Notes App

Using localStorage.

---

### Q111 — Kanban Board

Features:

- Drag & Drop
- Save State

---

### Q112 — Quiz Application

---

### Q113 — Chat UI Simulation

---

### Q114 — URL Shortener Frontend

---

### Q115 — E-Commerce Product Listing Page

---

# SECTION 9 — Advanced Developer Thinking

### Q116

Implement custom:

```js
useState()
```

concept.

---

### Q117

Implement custom:

```js
useEffect()
```

concept.

---

### Q118

Build a mini Virtual DOM.

---

### Q119

Build a Virtual DOM Diffing Algorithm.

---

### Q120

Create a Task Scheduler.

---

### Q121

Implement a Request Queue.

---

### Q122

Implement Caching Layer.

---

### Q123

Build a Mini Router.

---

### Q124

Simulate Authentication Flow.

---

### Q125

Design Frontend Architecture for:

```txt
E-Commerce Platform
```

---

# HOW TO PRACTICE

For every question:

## Step 1

Understand the problem.

## Step 2

Think of a brute-force approach.

## Step 3

Dry run the logic.

## Step 4

Write edge cases.

## Step 5

Implement the solution.

## Step 6

Refactor and improve.

---

# GOLDEN RULES

❌ Avoid:

- Copy-pasting
- Memorizing solutions
- Watching tutorials without coding

✅ Focus On:

- Debugging
- DOM practice
- Console experiments
- API handling
- Building projects
- Understanding why code works

---

# FINAL GOAL

Become a JavaScript developer who can:

- Build frontend applications independently
- Understand browser behavior deeply
- Work confidently with APIs
- Debug asynchronous code
- Design scalable frontend architecture
- Learn React, Next.js, and modern frameworks easily because the fundamentals are strong
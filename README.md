# randomAny
This small, convenient module provides simple utility functions to generate random numbers, strings, and user-agent strings. It is versatile in that it allows you to generate random values with various constraints and formats, making it a valuable tool for testing, data generation, and simulation.

# Features
### The module includes the following functions:
```js
randomNumber(minNum, maxNum, decimalNum)
```
### Generates random numbers in several ways:

* **Single argument**: Generates a random number with the specified number of digits.
* **Two arguments**: Generates a randomly rounded integer between and inclusive of **minNum** and **maxNum**
* **Three arguments**: Generates a random number between **minNum** and **maxNum** (inclusive) with **decimalNum** decimal places. The return value is a string to retain the specified number of decimal places.

```js
randomString(length, includeNumbers)
```
### Generates a random alphanumeric string.

* **length**: The number of characters the random string should contain.
* **includeNumbers**: Boolean indicating whether or not the string should include numeric characters.

```js
randomUserAgent(browserIdentifier)
```
### Generates a random user-agent string for browsers:

* browserIdentifier (optional): Specify a browser ('**Chrome**', '**Firefox**', '**Safari**', '**Edge**') to generate a corresponding user-agent string. If not provided, a random browser's user-agent string will be generated.

# Installation

Using npm:
```shell
npm i random-syskey
```

In Node.JS:
```js
const rs = require('random-syskey');
```

# Usage
### Here are some examples of how you can use the module:
#### Generate a Random Number
```js
// Generate a random number with 5 digits
console.log(rs.randomNumber(5));

// Generate a random integer between 10 and 20
console.log(rs.randomNumber(10, 20));

// Generate a random number between 1 and 10 with 2 decimal places
console.log(rs.randomNumber(1, 10, 2));
```
#### Generate a Random String
```js
// Generate a 10-character long random string
console.log(rs.randomString(10, false));

// Generate a 15-character long random string that includes numbers
console.log(rs.randomString(15, true));
```
#### Generate a Random User-Agent String
```js
// Generate a random user-agent string of any supported browser
console.log(rs.randomUserAgent());

// Generate a random user-agent string for Firefox
console.log(rs.randomUserAgent('Chrome'));
```
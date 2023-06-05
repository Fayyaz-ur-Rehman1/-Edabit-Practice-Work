// 1}
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

// Examples
// binaryToDecimal([0, 0, 0, 1]) ➞ 1

// binaryToDecimal([0, 0, 1, 0]) ➞ 2

// binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005

function binaryToDecimal(num) {
    let pow = 0;
    let sum = 0
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] == !0) {
            sum += Math.pow(2, pow)
        }
        pow++
    }
    return sum
}

console.log(binaryToDecimal([0, 0, 0, 1]));
console.log(binaryToDecimal([0, 0, 1, 0]));
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]));


// 2}
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// Examples
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            main.push(arr[i])
        }
    }
    return main
}

console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));


// 3}

// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]
// integerBoolean("10") ➞ [true, false]
// integerBoolean("001") ➞ [false, false, true]
// Notes
// Expect numbers with 0 and 1 only.

function integerBoolean(booleans) {
    let main = [];
    for (let i = 0; i < booleans.length; i++) {
        if (booleans[i] === "1") {
            main.push(true)
        } else {
            main.push(false)
        }
    }
    return main
}

console.log(integerBoolean("100101"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));


// // 4}

// // Given a letter and an array of words, return whether the letter does not appear in any of the words.
// // Examples
// // forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
// // forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
// // forbiddenLetter("m", []) ➞ true

function forbiddenLetter(letter, arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i]
        if (checkLatter(currentElement, letter)) {
            return false
        }
    }
    return true
}

function checkLatter(str, letter) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            return true
        }
    }
    return false
}

console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));

////////////////////////////////////////////////////////////////////////////////////////////////////

// Loop-Revice

for (let i = 1; i <= 10; i++) {
    console.log(i * 2);
}

for (let n = 2; n <= 2; n++) {
    for (let i = 1; i <= 10; i++) {
        console.log(i * n);
    }
}

const n = 2;
for (i = 1; i <= 10; i++) {
    console.log(i * n);
}

function fn(p1, p2) {
    p2();
    return p1;
}

function callback() {
    console.log("hello");
}

fn(1, callback);


// ---------------------------------------


// 1}

// Create a function that takes an array containing only numbers and return the first element.
// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

function getFirstValue(arr) {
    for (let i = 0; i < arr.length; i++) {
        return arr[i]
    }
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));


function getFirstValue1(arr) {
    // return arr.shift()
    // return arr.at(0)
    return arr[0]
}

console.log(getFirstValue1([1, 2, 3]));
console.log(getFirstValue1([80, 5, 100]));
console.log(getFirstValue1([-500, 0, 50]));

// // 2}

// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.
// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]
// drop([1, 2, 3], 2) ➞ [3]
// drop([1, 2, 3], 5) ➞ []
// drop([1, 2, 3], 0) ➞ [1, 2, 3]

function drop(arr, index) {
    let main = [];
    for (let i = index; i < arr.length; i++) {
        main.push(arr[i])
    }
    return main
}

console.log(drop([1, 2, 3], 1))
console.log(drop([1, 2, 3], 2))
console.log(drop([1, 2, 3], 5))
console.log(drop([1, 2, 3], 0))


function drop1(arr, index) {
    // return arr.slice(index)
    return arr.splice(index)
}

console.log(drop1([1, 2, 3], 1))
console.log(drop1([1, 2, 3], 2))
console.log(drop1([1, 2, 3], 5))
console.log(drop1([1, 2, 3], 0))

// // 3}

// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []

function reverse(arr) {
    let main = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        main.push(arr[i])
    }
    return main
}

console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));


function reverse1(arr) {
    return arr.reverse();
}

console.log(reverse1([1, 2, 3, 4]));
console.log(reverse1([9, 9, 2, 3, 4]));
console.log(reverse1([]));

// // 4}

// // Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
// // Examples
// // incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
// // incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
// // incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

function incrementItems(arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i] + 1)
    }
    return main
}

console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));


function incrementItems1(arr) {
    return arr.map(eml => eml + 1)
}

console.log(incrementItems1([0, 1, 2, 3]));
console.log(incrementItems1([2, 4, 6, 8]));
console.log(incrementItems1([-1, -2, -3, -4]));



// 5} 

// Create a function that accepts an array and returns the last item in the array.
// Examples
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true


function getLastItem(arr) {
    for (let i = 2; i < arr.length; i++) {
        return arr[i]
    }
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));


function getLastItem(arr) {
    //    return arr.pop()
    return arr.at(-1)
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));
// // 5}

// Create a function that takes an array of numbers or letters and returns a string.
// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(arr) {
    str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
    }
    return str
}

function arrayToString(str) {
    return str.join(' ')
    // return str.toString()
    // return `${str.join(' ')}`
    // return str.join(' ') + ""
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// 6}

// Create a function to concatenate two integer arrays.
// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]


function concat(arr, arr1) {
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1[i])
    }
    return arr
}


console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));


function concat1(arr, arr1) {
    // return arr.concat(arr1)
    return [...arr, ...arr1]
}
console.log(concat1([1, 3, 5], [2, 6, 8]));
console.log(concat1([7, 8], [10, 9, 1, 1, 2]));
console.log(concat1([4, 5, 1], [3, 3, 3, 3, 3]));


// 7}
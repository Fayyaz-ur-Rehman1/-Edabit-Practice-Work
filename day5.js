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

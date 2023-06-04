for (i = 1; i <= 10; i++) {
    console.log(i * 2);
}

for (n = 2; n <= 2; n++) {
    for (i = 1; i <= 10; i++) {
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

Edabit


// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// Examples
// sumPolygon(3) ➞ 180
// sumPolygon(4) ➞ 360
// sumPolygon(6) ➞ 720
// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.


function sumPolygon(num) {
    return (num - 2) * 180
}
console.log(sumPolygon(3));
console.log(sumPolygon(4));
console.log(sumPolygon(6));


// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// Examples
// nameString("Mubashir") ➞ "MubashirEdabit"

// nameString("Matt") ➞ "MattEdabit"

// nameString("javaScript") ➞ "javaScriptEdabit"
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function nameString(str) {
    return str + "Edabit"
}

console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));


// Create a function that returns the number of arguments it was called with.

// Examples
// numArgs() ➞ 0

// numArgs("foo") ➞ 1

// numArgs("foo", "bar") ➞ 2

// numArgs(true, false) ➞ 2

// numArgs({}) ➞ 1
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function numArgs(...args) {
    //   return  arguments.length
    return args.length
}

console.log(numArgs());
console.log(numArgs("foo"));
console.log(numArgs("foo", "bar"));
console.log(numArgs(true, false));
console.log(numArgs({}));


// Create a function that takes an array of numbers arr and returns an inverted array.
// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]
// invertArray([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions iEdabitn the Solutions tab.

function invertArray(arr) {
    const res = [];
    // for (i = 0; i < arr.length; i++) {
    // const currentValue = arr[i];
    // res.push(-currentValue);
    // }
    // return res;
    return arr.map(eachEle => -eachEle);
}


console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));


// Create a function that takes an array containing only numbers and return the first element.
// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.



function getFirstValue(arr) {
    // return   arr.shift()
    // return arr.at(0);
    // return arr[0];
    // return arr.slice(0,1);
    //     return arr.splice(0, 1)
}

console.log(getFirstValue([1, 2, 3]));
console.log(getFirstValue([80, 5, 100]));
console.log(getFirstValue([-500, 0, 50]));


// Given two arguments, return an array which contains these two arguments.
// Examples
//     makePair(1, 2) ➞ [1, 2]
// makePair(51, 21) ➞ [51, 21]
// makePair(512124, 215) ➞ [512124, 215]

function makePair(p1, p2) {
    // return args
    // return Object.values(arguments)
    // return [p1,p2]
    // const arr = []
    // arr.push(p1,p2)
    // return arr
}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));


// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.
// Examples
// drop([1, 2, 3], 1) ➞ [2, 3]
// drop([1, 2, 3], 2) ➞ [3]
// drop([1, 2, 3], 5) ➞ []
// drop([1, 2, 3], 0) ➞ [1, 2, 3]
// Notes
// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

function drop(num1, num2) {
    //  return   num1.slice(num2)
    return num1.splice(num2)
}

console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));

// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13
// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31
// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0

function getVoteCount(obj) {
    // return obj.upvotes - obj.downvotes
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));


// Write a function to reverse an array.
// Examples
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]
// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]
// reverse([]) ➞ []
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function reverse(arr) {
    return arr.reverse()
    const res = []
    for (i = arr.length - 1; i >= 0; i--) {
        res.push(arr[i])
    }
    return res
}
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));
console.log(reverse([]));

map
filter
reduce
some
every


const number = [1, 4, 9];
const roots = number.map(num => Math.sqrt(num));
console.log(roots);


function mapfn(arr) {
    arr = [1, 2, 3, 4, 5]
    return arr.map(x => x * 2)
}
console.log(mapfn());


let arrnum = [4, 25, 100, 16];
function sqrtfn() {
    return arrnum.map((x) => Math.sqrt(x))
}
console.log(sqrtfn());


// Create a function that takes an array of numbers or letters and returns a string.
// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"


function arrayToString(str) {
    // return str.join('')
    // return str.toString().replaceAll("," , "")
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));


// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!
// Examples
// incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]
// incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
// incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]
// Notes
// Make sure to read every line carefully.

function incrementItems(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1
    }
    return arr
    return arr.map(x => x + 1)

}

console.log(incrementItems([0, 1, 2, 3]));
console.log(incrementItems([2, 4, 6, 8]));
console.log(incrementItems([-1, -2, -3, -4]));

// You can assign variables from arrays like this:
// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]
// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.


const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]
console.log(a) // outputs 1
console.log(b) // outputs 2

// Create a function that accepts an array and returns the last item in the array.
// Examples
// getLastItem([1, 2, 3]) ➞ 3
// getLastItem(["cat", "dog", "duck"]) ➞ "duck"
// getLastItem([true, false, true]) ➞ true
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.



function getLastItem(arr) {
    //   return  arr.pop()
    //    return arr.at(-1)
    return arr[arr.length - 1]

}


console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck", 'hello']));
console.log(getLastItem([true, false, true]));


// Create a function to concatenate two integer arrays.
// Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]
// Notes
// Don't forget to return the result.
// See Resources tab for more info.


function concat(arr1, arr2) {
    const res = [];
    arr1.forEach(eachElement => res.push(eachElement));
    arr2.forEach(eachElement => res.push(eachElement));
    const newArr = [...arr1, ...arr2]
    //     return arr1.concat(arr2)
}

console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));


// Create a function that takes an array and a string as arguments and returns the index of the string.
// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0


function findIndex(arr1, arr2) {
    return arr1.indexOf(arr2)
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));


// Given an index and an array, return the value of the array with the given index.
// Examples
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4
// Notes
// Math.floor() can be helpful.

function valueAt(num1, num2) {
    return num1.at(num2)
    return num1[Math.floor(num2)]
}

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));


// Create a function that finds the index of a given item.

// Examples
// search([1, 5, 3], 5) ➞ 1

// search([9, 8, 3], 3) ➞ 2

// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.


function search(num, num2) {
    for (let i = 0; i < num.length; i++) {
        const currentElement = num[i];
        if (currentElement === num2) {
            return i;
        }

    }
    return -1
    return num.indexOf(num2);
}

console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));


// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15
// sumArray([-1, 0, 1]) ➞ 0
// sumArray([0, 4, 8, 12]) ➞ 24
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.


function sumArray(arr) {
    // let sum = 0
    // for (i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }
    // return sum

    return arr.reduce(function (a, b) {
        return a + b
    })
}
console.log(sumArray([1, 2, 3, 4, 5]))
console.log(sumArray([-1, 0, 1]))
console.log(sumArray([0, 4, 8, 12]))


// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
// Examples
// search([1, 2, 3, 4], 3) ➞ 2
// search([2, 4, 6, 8, 10], 8) ➞ 3
// search([1, 3, 5, 7, 9], 11) ➞ -1
// Notes
// If the item is not present, return -1.
// The given array is ordered.

function search(num1, num2) {
    return num1.indexOf(num2)

}
console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));



// Write a function to check if an array contains a particular number.
// Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
// check([1, 1, 2, 1, 1], 3) ➞ false
// check([5, 5, 5, 6], 5) ➞ true
// check([], 5) ➞ false
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function check(num1, num2) {
    return num1.includes(num2)
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));


// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// parseArray([]) ➞ []
// Notes
// Return [] if array is empty.

function parseArray(arr) {
    return arr.map(eachElement => String(eachElement));
}

console.log(parseArray([1, 2, "a", "b"]));
console.log(parseArray(["abc", 123, "def", 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(parseArray([]));


// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// Example:
// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
// toNumberArray(["91", "44"]) ➞ [91, 44]
// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]
// Notes
// Some inputs are floats.


function toNumberArray(arr1) {
    return arr1.map(eachElement => Number(eachElement));
}

console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));



// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.
// Examples
// fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }


function fiftyThirtyTwenty(income) {
    const needs = (income * 50) / 100;
    const wants = (income * 30) / 100;
    const savings = (income * 20) / 100;
    return { Needs: needs, Wants: wants, Savings: savings };
}

console.log(fiftyThirtyTwenty(10000));
console.log(fiftyThirtyTwenty(50000));
console.log(fiftyThirtyTwenty(13450));



// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// Examples
// hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) ➞ true
// hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) ➞ false

// hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) ➞ false
// Notes
// The arrays will always be three elements long.
// The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.

function hasSameBread(arr1, arr2) {
    //    return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1];
    return arr1.at(0) === arr2.at(0) && arr1.at(-1) === arr2.at(-1)

}
console.log(hasSameBread(["white bread", "lettuce", "white bread"], ["white bread", "tomato", "white bread"]))
console.log(hasSameBread(["brown bread", "chicken", "brown bread"], ["white bread", "chicken", "white bread"]))
console.log(hasSameBread(["toast", "cheese", "toast"], ["brown bread", "cheese", "toast"]))


// Create a function that takes an array and returns the types of values (data types) in a new array.
// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]
// Notes
// Check the Resources tab for help if needed.
// Remember Arrays & Null in JS are treated as object, hence the examples

function arrayValuesTypes(x) {
    return x.map(eachelemetn => typeof eachelemetn);
    let arr = [];
    for (i = 0; i < x.length; i++) {
        const eleType = typeof x[i]
        arr.push(eleType)
    }
    return arr
}

console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));


var [head, tail] = [1, 2, 3, 4]

console.log(head) // outputs  1
console.log(tail) // outputs 2



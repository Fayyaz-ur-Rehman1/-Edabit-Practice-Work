
// 1}

// Create a function that takes an array containing only numbers and return the first element.
// Examples
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

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
    //    return arr.pop()
    return arr.at(-1)
}

console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));


// 6}

// Create a function that takes an array of numbers or letters and returns a string.
// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"


function arrayToString(str) {
    return str.join(' ')
    // return str.toString()
    // return `${str.join(' ')}`
    // return str.join(' ') + ""
}

console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));



// 7}
// Create a function that takes an array and a string as arguments and returns the index of the string.
// Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

function findIndex1(arr, word) {
    //  return arr.indexOf(word)
    return arr.lastIndexOf(word)
}


console.log(findIndex1(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex1(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex1(["a", "g", "y", "d"], "d"));
console.log(findIndex1(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));


// 8}  

// Given an index and an array, return the value of the array with the given index.
// Examples
// valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6
// valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5
// valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4
// Notes
// Math.floor() can be helpful.


function valueAt1(arr, word) {
    const currentIndex = Math.floor(word)
    return arr[currentIndex]
    // return arr.at(word)
}

console.log(valueAt1([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt1([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt1([1, 2, 3, 4], 6.535355314 / 2));


// 9}
// Create a function that finds the index of a given item.
// Examples
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.



function search1(arr, index) {
    return arr.indexOf(index)
}
console.log(search1([1, 5, 3], 5));
console.log(search1([9, 8, 3], 3));
console.log(search1([1, 2, 3], 4));


// 10}

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// Examples
// sumArray([1, 2, 3, 4, 5]) ➞ 15
// sumArray([-1, 0, 1]) ➞ 0
// sumArray([0, 4, 8, 12]) ➞ 24

function sumArray(arr) {
    return arr.reduce(function (a, b) {
        return a + b
    })
}

console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([-1, 0, 1]));
console.log(sumArray([0, 4, 8, 12]));

// 11}

// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
// Examples
// search([1, 2, 3, 4], 3) ➞ 2
// search([2, 4, 6, 8, 10], 8) ➞ 3
// search([1, 3, 5, 7, 9], 11) ➞ -1

function search(arr, index) {
    // return arr.indexOf(index)
    return arr.lastIndexOf(index)
}

console.log(search([1, 2, 3, 4], 3));
console.log(search([2, 4, 6, 8, 10], 8));
console.log(search([1, 3, 5, 7, 9], 11));

// 12}

function check(arr, include) {
    return arr.includes(include)
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));

// 13}

// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.
// Examples
// parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]
// parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]
// parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

function parseArray(arr) {
    return arr.map(function (eml) {
        return eml.toString()
    })
}

console.log(parseArray([1, 2, "a", "b"]));
console.log(parseArray(["abc", 123, "def", 456]));
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));
console.log(parseArray([]));


// 14}

// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.
// Examples
// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]
// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]
// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

function arrBetween(num1, num2, arr) {
    return arr.filter(num => num > num1 && num < num2)
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78]));

// 15}

// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// Example:
// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
// toNumberArray(["91", "44"]) ➞ [91, 44]
// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

function toNumberArray(arr) {
    return arr.map(function (eml) {
        return Number(eml)
    })
}

console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"])); 


// 16}

// Create a function that takes an array and returns the types of values (data types) in a new array.
// Examples
// arrayValuesTypes([1, 2, "null", []])
// ➞ ["number", "number", "string", "object"]
// arrayValuesTypes(["214", true, false, 2, 2.15, [], null])
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214])
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

function arrayValuesTypes(arr) {
    return arr.map(elm => typeof elm)
}

console.log(arrayValuesTypes([1, 2, "null", []]));
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));


// 17}

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


function hasSameBread(arr, arr1) {
    // return arr.at(0) === arr1.at(0) && arr.at(-1) === arr1.at(-1)
    return arr[0] === arr1[0] && arr[arr.length - 1] === arr1[arr1.length - 1]
}

console.log(hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
));
console.log(hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
));
console.log(hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
));

// 18}

// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
// Examples
// checkSquareAndCube([4, 8]) ➞ true
// checkSquareAndCube([16, 48]) ➞ false
// checkSquareAndCube([9, 27]) ➞ true

function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1])
}

console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27])); 

// 19}

// Levers are simple machines with a rigid beam and a fulcrum.From the picture below, you can see that there are 3 - types of levers: first class, second class and third class.
// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.
// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

// determineLever(["e", "f", "l"]) ➞ "first class lever"
// determineLever(["e", "l", "f"]) ➞ "second class lever"
// determineLever(["f", "e", "l"]) ➞ "third class lever"

function determineLever(str) {
    switch (str[1]) {
        case "f":
            return "first class lever"
        case "l":
            return "second class lever"
        case "e":
            return "third class lever"
    }
}

console.log(determineLever(["e", "f", "l"]));
console.log(determineLever(["e", "l", "f"]));
console.log(determineLever(["f", "e", "l"])); 

// 20}

// Create a function which returns the length of a string, WITHOUT using String.length property.
// length("Hello World") ➞ 11
// length("Edabit") ➞ 6
// length("wash your hands!") ➞ 16

function length(str) {
    return str.length
}

console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!"));


// 21}

// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]

function halfQuarterEighth(arr) {
    let main = []
    let half = arr / 2;
    let quarter = arr / 4;
    let eighth = arr / 8;
    main.push(half, quarter, eighth)
    return main
}

console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25)); 


// 22}

// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"
// Examples
// nSidedShape(3) ➞ "triangle"
// nSidedShape(1) ➞ "circle"
// nSidedShape(9) ➞ "nonagon"

function nSidedShape(num) {
    const allshape = {
        1: "circle",
        2: "semi-circle",
        3: "triangle",
        4: "square",
        5: "pentagon",
        6: "hexagon",
        7: "heptagon",
        8: "octagon",
        9: "nonagon",
        10: "decagon",
    }
    return allshape[num]
}

console.log(nSidedShape(3));
console.log(nSidedShape(1));
console.log(nSidedShape(9)); 

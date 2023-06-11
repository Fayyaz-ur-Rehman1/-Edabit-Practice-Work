
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

    // return arr.map(eml => eml + 1)

    return arr.reduce(function (acc, curr) {
        acc.push(curr + 1)
        return acc
    }, [])
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
return arr.pop()
return arr.at(-1)
return arr[-1]
return arr.length - 1
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


function concat1(arr, arr1) {
    // return arr.concat(arr1)
    return [...arr, ...arr1]
}
console.log(concat1([1, 3, 5], [2, 6, 8]));
console.log(concat1([7, 8], [10, 9, 1, 1, 2]));
console.log(concat1([4, 5, 1], [3, 3, 3, 3, 3]));


// 8}
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


// 9}  

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
return arr.at(word)
return arr[Math.floor(word)]
}

console.log(valueAt1([1, 2, 3, 4, 5, 6], 10 / 2));
console.log(valueAt1([1, 2, 3, 4, 5, 6], 8.0 / 2));
console.log(valueAt1([1, 2, 3, 4], 6.535355314 / 2));


// 10}
// Create a function that finds the index of a given item.
// Examples
// search([1, 5, 3], 5) ➞ 1
// search([9, 8, 3], 3) ➞ 2
// search([1, 2, 3], 4) ➞ -1
// Notes
// If the item is not present, return -1.



function search1(arr, index) {
    // return arr.indexOf(index)
    return arr.lastIndexOf(index)
}
console.log(search1([1, 5, 3], 5));
console.log(search1([9, 8, 3], 3));
console.log(search1([1, 2, 3], 4));


// 11}

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

// 12}

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

// 13}


function check(arr, arr1) {
    // return arr.includes(arr1)
    // return arr.some(element => element === arr1);
    // return arr.indexOf(arr1) !== -1
}

console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));

// 14}

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


// 15}

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

// 16}

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


// 17}

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


// 18}

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

// 19}

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

// 20}

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

// 23}

// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
// Examples

// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]
// Notes

function getMultipliedArr(arr) {
    return arr.map(function (elm) {
        return elm * 2
    })
}

console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));

// 24}

// Create a function that takes an array of words and transforms it into an array of each word's length.
// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]

// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]

function wordLengths(arr) {
    return arr.map(function (elm) {
        return elm.length
    })
}

console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));


// 25}

// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Examples
// findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ➞ 12040
// findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]) ➞ 276
// findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) ➞ 405
// findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]) ➞ 5412

// , [ 26, 9, 26 ]) ➞ 5412

function findDifference(arr, arr1) {
    let total1 = 1;
    let total2 = 1;
    for (let i = 0; i < arr.length; i++) {
        total1 *= arr[i]
        total2 *= arr1[i]
    }
    return Math.abs(total1 - total2)
}

function findDifference(num, num1) {
}

console.log(findDifference([28, 16, 29], [7, 8, 17]));
console.log(findDifference([9, 22, 18], [16, 24, 10]));
console.log(findDifference([1, 9, 25], [10, 7, 9]));
console.log(findDifference([7, 6, 16], [26, 9, 26]));

// 26}

// Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).
// Examples
// evenOrOdd([0]) ➞ "even"

// evenOrOdd([1]) ➞ "odd"

// evenOrOdd([]) ➞ "even"

// evenOrOdd([0, 1, 5]) ➞ "even"

function evenOrOdd(arr) {
    return
}

console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));

// 27}

// Create a function that takes a string and returns a string with spaces in between all of the characters.
// xamples
// spaceMeOut("space") ➞ "s p a c e"
// spaceMeOut("far out") ➞ "f a r   o u t"
// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

function spaceMeOut(str) {
    return str.split("").join(' ')
}

console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));


// 28}

// Given an array, rotate the values clockwise by one (the last value is sent to the first position).
// Check the examples for a better understanding.
// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]
// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]
// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]

function rotateByOne(num) {
    b = num.pop()
    num.unshift(b)
    return num
}
console.log(rotateByOne([1, 2, 3, 4, 5]));
console.log(rotateByOne([6, 5, 8, 9, 7]));
console.log(rotateByOne([20, 15, 26, 8, 4]));

// 29}

// Create a function that takes an array of numbers arr and returns an inverted array.
// Examples
// invertArray([1, 2, 3, 4, 5]) ➞ [-1, -2, -3, -4, -5]
// invertArray([1, -2, 3, -4, 5]) ➞ [-1, 2, -3, 4, -5]

function invertArray(arr) {
    return arr.map(x => -x)
}

console.log(invertArray([1, 2, 3, 4, 5]));
console.log(invertArray([1, -2, 3, -4, 5]));
console.log(invertArray([]));

// 30}

// Create a function that returns the selected filename from a path. Include the extension in your answer.
// Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
// getFilename("ffprobe.exe") ➞ "ffprobe.exe"

function getFilename(str) {
    return str.split('/').pop();
}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename("ffprobe.exe"));

// 31}

// Write a function that returns the sum of elements greater than 5, in the given array .
// Examples
// sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77
// sumFive([1, 2, 3, 4]) ➞ 0
// sumFive([10, 12, 28, 47, 55, 100]) ➞ 252

function sumFive(arr) {
    return arr.filter(x => x > 5).reduce((a, b) => a + b, 0)
}

console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));

// 32}

// Create a function that takes an array and returns the sum of all numbers in the array.
// Examples
// getSumOfItems([2, 7, 4]) ➞ 13
// getSumOfItems([45, 3, 0]) ➞ 48
// getSumOfItems([-2, 84, 23]) ➞ 105

function getSumOfItems(arr) {
    return arr.reduce((a, b) => {
        return a + b
    })
}

console.log(getSumOfItems([2, 7, 4]));
console.log(getSumOfItems([45, 3, 0]));
console.log(getSumOfItems([-2, 84, 23]));



// 33}

// Create a function that returns an array of all the integers between two given numbers start and end.
// Examples
// rangeOfNum(2, 4) ➞ [3]
// rangeOfNum(5, 9) ➞ [6, 7, 8]
// rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]

function rangeOfNum(start, end) {
    let main = []
    for (let i = start + 1; i < end; i++) {
        main.push(i)
    }
    return main
}

console.log(rangeOfNum(2, 4));
console.log(rangeOfNum(5, 9));
console.log(rangeOfNum(2, 11));

// 34} 

// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:
// cola
// fanta
// Examples
// skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]
// skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []
// skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]

function skipTooMuchSugarDrinks(arr) {

    let juice = arr.filter(arr => {
        return arr !== "fanta" && arr !== "cola";
    })
    return juice
}


console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));


// 35}

// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...
// Examples
// addIndexes([0, 0, 0, 0, 0]) ➞[0, 1, 2, 3, 4]
// addIndexes([1, 2, 3, 4, 5]) ➞[1, 3, 5, 7, 9]
// addIndexes([5, 4, 3, 2, 1]) ➞[5, 5, 5, addIndexes([0, 0, 0, 0, 0]) ➞[0, 1, 2, 3, 4]

function addIndexes(arr) {
    return arr.map((a, b) => a + b)
}


console.log(addIndexes([0, 0, 0, 0, 0]));
console.log(addIndexes([1, 2, 3, 4, 5]));
console.log(addIndexes([5, 4, 3, 2, 1]));


// 36}

// n mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.
// Examples
// binaryToDecimal([0, 0, 0, 1]) ➞ 1
// binaryToDecimal([0, 0, 1, 0]) ➞ 2
// binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]) ➞ 1005


function binaryToDecimal(num) {
    return parseInt(num.join(""), 2)

}


console.log(binaryToDecimal([0, 0, 0, 1]));
console.log(binaryToDecimal([0, 0, 1, 0]));
console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]));

// 37}

// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
// Examples
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr) {
    return arr.filter((a) => a < 1730)
}


console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));


// 38}

// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]
// integerBoolean("10") ➞ [true, false]
// integerBoolean("001") ➞ [false, false, true]

function integerBoolean(str) {
    return str.split('').map(function (x) {
        return x === '1'
    })
}
console.log(integerBoolean("100101"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));




// 39}

// Given a letter and an array of words, return whether the letter does not appear in any of the words.
// Examples
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
// forbiddenLetter("m", []) ➞ true

function forbiddenLetter(a, arr) {
    return arr.every(function (word) {
        return !word.includes(a)
    })
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));

// 40}

// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

//     Examples
// chineseZodiac(2021) ➞ "Ox"

// chineseZodiac(2020) ➞ "Rat"

// chineseZodiac(1933) ➞ "Rooster"
// Notes
// The list of animals used can vary slightly, so check the Resources tab for the list that you will need for this challenge.

function chineseZodiac(year) {
    const obj1 = {
        2021: "0x",
        2020: "Rat",
        1933: "Rooster",
    }
    return obj1[year]
}

console.log(chineseZodiac(2021));
console.log(chineseZodiac(2020));
console.log(chineseZodiac(1933));




// // 41}

// // Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.
// Examples
// makeRug(3, 5) ➞ [
//   "#####",
//   "#####",
//   "#####"
// ]

// makeRug(3, 5, '$')  ➞ [
//   "$$$$$",I
//   "$$$$$",
//   "$$$$$"
// ]

// makeRug(2, 2, 'A')  ➞ [
//   "AA",
//   "AA"
// // ]

function makeRug(m, n, s = '#') {
    let a = [3, 2];
    for (let i = 0; i < m; i++) a.push(s.repeat(n))
    return a;
}

console.log(makeRug(3, 5));
console.log(makeRug(3, 5, '$'));
console.log(makeRug(2, 2, 'A'));



// 42}


// // Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// // Examples
// // largestNumbers(2, [4, 3, 2, 1]) ➞ [3, 4]

// // largestNumbers(1, [7, 19, 4, 2]) ➞ [19]

// // largestNumbers(3, [14, 12, 57, 11, 18, 16]) ➞ [16, 18, 57]

// // largestNumbers(0, [1, 3, 4, 2]) ➞ []

function largestNumbers(n, arr) {
    return n == 0 ? arr : arr.sort((x, y) => x - y).slice(-n)

}
console.log(largestNumbers(2, [4, 3, 2, 1]));
console.log(largestNumbers(1, [7, 19, 4, 2]));
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]));
console.log(largestNumbers(0, [1, 3, 4, 2]));


// 43}

// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// Examples
// sumMinimums([
//   [1, 2, 3, 4, 5],
//   [5, 6, 7, 8, 9],
//   [20, 21, 34, 56, 100]
// ]) ➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20



function sumMinimums(arr) {
    const echmin = arr.reduce((acc, val) => {
        acc.push(Math.min(...val))
        return acc
    }, [])
    return echmin
}

console.log(sumMinimums([[1, 2, 3, 4, 5], [5, 6, 7, 8, 9], [20, 21, 34, 56, 100]]))


// 44}

// Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.
// Examples
// cleanUpArray(["8"]) ➞ [[8], []]
// cleanUpArray(["11"]) ➞ [[], [11]]
// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]
// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]


function cleanUpArray(arr) {
    return arr.reduce(function (a, b) {
        var main = b % 2 === 0 ? a[0] : a[1];
        main.push(parseInt(b));
        return a;
    }, [[], []]);
}

console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["11"]));
console.log(cleanUpArray(["7", "4", "8"]));
console.log(cleanUpArray(["9", "4", "5", "8"]));


// 45}

// Create a function that finds each factor of a given number n.Your solution should return an array of the number(s) that meet this criteria.
//     Examples
// findFactors(9) ➞[1, 3, 9]
// // 9 has three factors 1, 3 and 9
// findFactors(12) ➞[1, 2, 3, 4, 6, 12]
// findFactors(20) ➞[1, 2, 4, 5, 10, 20]
// findFactors(0) ➞[]
// 0 has no factors

function findFactors(num) {
    return Array.from(Array(num + 1).keys()).filter(function (factor) {
        return num % factor === 0
    })
}

console.log(findFactors(9));
console.log(findFactors(12));
console.log(findFactors(20));
console.log(findFactors(0));


// 46}

// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.
// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.
// Examples
// ageDifference([29, 1, 6, 8, 28]) ➞ "1 year"
// ageDifference([43, 86, 49, 86]) ➞ "No age difference between spouses."
// ageDifference([2, 4, 6, 32, 27]) ➞ "5 years"

function ageDifference(ages) {
    const maxAge = Math.max(...ages);
    const minAge = Math.min(...ages);

    const ageDiff = maxAge - minAge;

    return ageDiff === 0 ? "No age difference between spouses." : ageDiff + " year";
}

console.log(ageDifference([29, 1, 6, 8, 28]));
console.log(ageDifference([43, 86, 49, 86]));
console.log(ageDifference([2, 4, 6, 32, 27]));
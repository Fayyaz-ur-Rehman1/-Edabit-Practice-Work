// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
// Examples
// checkSquareAndCube([4, 8]) ➞ true
// checkSquareAndCube([16, 48]) ➞ false
// checkSquareAndCube([9, 27]) ➞ true
// Notes
// Remember to return either true or false.
// All arrays contain two positive numbers.
// If you're stuck, check the Resources for a hint.

function checkSquareAndCube(num){
       return Math.sqrt(num[0]) === Math.cbrt(num[1])
}

console.log(checkSquareAndCube([4, 8]));
console.log(checkSquareAndCube([16, 48]));
console.log(checkSquareAndCube([9, 27])); 


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.
// Examples
// determineLever(["e", "f", "l"]) ➞ "first class lever"
// determineLever(["e", "l", "f"]) ➞ "second class lever"
// determineLever(["f", "e", "l"]) ➞ "third class lever"


function determineLever(arrelm) {
    switch (arrelm[2]) {
        case "f":
            return "first class lever"

        case "l":
            return "second class lever"

        case "e":
            return "Third class lever"
    }

}
console.log(determineLever(["e", "f", "l"]));
console.log(determineLever(["e", "l", "f"]));
console.log(determineLever(["f", "e", "l"])); 


const arr = ["eyes", "nose", "lips", "ears"]
let [eyes, nose, lips, ears] = arr
console.log([eyes, nose, lips, ears]);

// Create a function which returns the length of a string, WITHOUT using String.length property.
// Examples
// length("Hello World") ➞ 11
// length("Edabit") ➞ 6
// length("wash your hands!") ➞ 16


function length(charcter) {
    // return charcter.length
    let  len = 0 
    for ( let i = 0; i < charcter.length; i++) {
        len += 1
    }
    return len
}

console.log(length("Hello World"));
console.log(length("Edabit"));
console.log(length("wash your hands!")); 


// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.
// Examples
// halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
// halfQuarterEighth(22) ➞ [11, 5.5, 2.75]
// halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
// Notes
// The order of the array is: half, quarter, eighth.


function halfQuarterEighth(num) {
let arr = [];
const half = num / 2;
const quarter = num / 4;
const eihth = num / 8;
arr.push(half , quarter , eihth)

return arr
}

console.log(halfQuarterEighth(6));
console.log(halfQuarterEighth(22));
console.log(halfQuarterEighth(25));

// Create a function that takes an array with numbers and return an array with the elements multiplied by two.
// Examples
// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]
// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]
// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]


function getMultipliedArr(num) {
    // let arr = [];
    // for(let i = 0 ; i < num.length ; i++){
    //       arr[i] =  num[i]*2 
    // }
    // return arr 
//  return num.map(x => x * 2)
return num.reduce((acc, currentVal) => {
    acc.push(currentVal * 2)
    return acc;
}, [])
}

console.log(getMultipliedArr([2, 5, 3]));
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0])); 



function determineLever(arrelm) {
    switch (arrelm[2]) {
        case "f":
            return "first class lever"

        case "l":
            return "second class lever"

        case "e":
            return "Third class lever"
    }

}


function nSidedShape(num) {
    switch (num) {
        case 1:
            return "circle"

        case 2:
            return "semi-circle"
        case 3:
            return "triangle"

        case 4:
            return "square"

        case 5:
            return "pentagon"

        case 6:
            return "hexagon"

        case 7:
            return "heptagon"

        case 8:
            return "octagon"

        case 9:
            return "nonagon"

        case 10:
            return "decagon"
    }

    const shapes = {
        1: 'circle',
        2: 'semi',
        3: 'triangle',
        4: 'square',
        5: 'pentagon',
        6: 'hexagon',
        7: 'heptagon',
        8: 'octagon',
        9: 'nonagon',
        10: 'decagon',
    };
    return shapes[num];
}


console.log(nSidedShape(3));
console.log(nSidedShape(1));
console.log(nSidedShape(9));


//     Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).
// Examples
// evenOrOdd([0]) ➞ "even"
// evenOrOdd([1]) ➞ "odd"
// evenOrOdd([]) ➞ "even"
// evenOrOdd([0, 1, 5]) ➞ "even"



function evenOrOdd(num) {
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i]
  }
  return sum % 2 === 0 ? "even" : "odd"
}

console.log(evenOrOdd([0]));
console.log(evenOrOdd([1]));
console.log(evenOrOdd([]));
console.log(evenOrOdd([0, 1, 5]));



// Create a function that takes a string and returns a string with spaces in between all of the characters.
// Examples
// spaceMeOut("space") ➞ "s p a c e"
// spaceMeOut("far out") ➞ "f a r   o u t"
// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

function spaceMeOut(str){
  //  return  str.split(['']).join(' ')
  let currentelm = ''
  for(let i = 0; i < str.length ; i++){
    //  currentelm  +=  str[i] + ' '
     currentelm += `${str[i]} `
  }
  return currentelm.trimEnd()
}
console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));


// Given an array, rotate the values clockwise by one (the last value is sent to the first position).
// Check the examples for a better understanding.
// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]
// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]
// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]


function rotateByOne(num) {
  let arr = []
  // arr.push(num[num.length - 1])
  // arr.push(num.at(-1))
  arr.push(num.pop())
  for (let i = 0; i < num.length ; i++) {
    arr.push(num[i])
  }
  return arr
}

console.log(rotateByOne([1, 2, 3, 4, 5]));
console.log(rotateByOne([6, 5, 8, 9, 7]));
console.log(rotateByOne([20, 15, 26, 8, 4])); 


// Create a function that takes an array of words and transforms it into an array of each word's length.
// Examples
// wordLengths(["hello", "world"]) ➞ [5, 5]
// wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]
// wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
// Notes
// No test case will contain punctuation.
// Arrays can be of various lengths.


function wordLengths(arr) {
  let main = []
  for (let i = 0; i < arr.length; i++) {
    main.push(arr[i].length)
  }
  return main
}
console.log(wordLengths(["hello", "world"]));
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])); 


// Create a function that returns the selected filename from a path. Include the extension in your answer.
// Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
// getFilename("ffprobe.exe") ➞ "ffprobe.exe"
// Notes
// Tests will include both absolute and relative paths.
// For simplicity, all paths will include forward slashes.

function getFilename(str) {
  let lstI = str.lastIndexOf("/")
  let str1 = ""
  for(let i = 0 ; i < lstI.length ; i++ ){
    str1 += lstI[i].pop()
  }
  return str1
}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename("ffprobe.exe")); 
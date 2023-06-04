// 1}

// // // // Write a function that returns the sum of elements greater than 5, in the given array .

// // // // Examples
// // // // sumFive([1, 5, 20, 30, 4, 9, 18]) ➞ 77

// // // // sumFive([1, 2, 3, 4]) ➞ 0

// // // // sumFive([10, 12, 28, 47, 55, 100]) ➞ 252

// answer

function sumFive(num) {
   let main = 0;
   for (let i = 0; i < num.length; i++) {
      if (num[i] > 5) {
         main += num[i]
      }
   }
   return main

}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));
console.log(sumFive([1, 2, 3, 4]));
console.log(sumFive([10, 12, 28, 47, 55, 100]));


// 2}


// // // Create a function that returns an array of all the integers between two given numbers start and end.
// // // Examples
// // // rangeOfNum(2, 4) ➞ [3]
// // // rangeOfNum(5, 9) ➞ [6, 7, 8]
// // // rangeOfNum(2, 11) ➞ [3, 4, 5, 6, 7, 8, 9, 10]

// answer

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


// 3}

// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta
// // Examples
// // skipTooMuchSugarDrinks(["fanta", "cola", "water"]) ➞ ["water"]

// // skipTooMuchSugarDrinks(["fanta", "cola"]) ➞ []

// // skipTooMuchSugarDrinks(["lemonade", "beer", "water"]) ➞ ["lemonade", "beer", "water"]
// // Notes
// // The function returns an array of strings.
// // All drink names are in lowercase.

// answer

function skipTooMuchSugarDrinks(arr1) {
   let main = [];
   for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== "cola" && arr1[i] !== "fanta") {
         main.push(arr1[i])
      }
   }
   return main
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));

// 4}

// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

// Examples
// addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]
// addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7, 9]
// addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

// answer

function addIndexes(arr) {
   let add = [];
   for (let i = 0; i < arr.length; i++) {
      add.push(arr[i] + i)
   }
   return add
}//
//
console.log(addIndexes([0, 0, 0, 0, 0]));
console.log(addIndexes([1, 2, 3, 4, 5]));
console.log(addIndexes([5, 4, 3, 2, 1]));


// 5}

// Create a function that returns the selected filename from a path. Include the extension in your answer.
// Examples
// getFilename("C:/Projects/pil_tests/ascii/edabit.txt") ➞ "edabit.txt"
// getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3") ➞ "Beethoven_5.mp3"
// getFilename("ffprobe.exe") ➞ "ffprobe.exe"
// Notes
// Tests will include both absolute and relative paths.
// For simplicity, all paths will include forward slashes.

// answer

function getFilename(str) {
   let lstI = str.lastIndexOf("/");
   let str1 = "";
   for (let i = lstI + 1; i < str.length; i++) {
      str1 += str[i];
   }
   return str1;
}

console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));
console.log(getFilename("ffprobe.exe"));


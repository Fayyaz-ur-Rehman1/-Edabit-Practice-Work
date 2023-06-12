// //  1}
// // This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:
// // function hello() {
// // }
// // All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.
// // Notes
// // The returned string must be in all lowercase letters.
// // If you get stuck on a challenge, find help in the Resources tab.
// // If you're really stuck, unlock solutions in the Solutions tab.

function hello() {
    return "hello edabit.com";
}
console.log(hello());


// // 2}

// // Write a function that returns the string "something" joined with a space " " and the given argument a.
// // Examples
// // giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// // giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// // giveMeSomething("something") ➞ "something something"

function giveMeSomething(str) {
    const add = "something";
    return add.concat(" " + str)
    // return "somthing " + str
    // return `somethings ${str}`
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

// // 3}

// // A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
// // Examples
// // nameString("Mubashir") ➞ "MubashirEdabit"
// // nameString("Matt") ➞ "MattEdabit"
// // nameString("javaScript") ➞ "javaScriptEdabit"

function nameString(str) {
    // let concatstr = " Edabit"
    // return str.concat(concatstr)
    // return str + " Edabit"
    return `${str} Edabit`
}

console.log(nameString("Mubashir"));
console.log(nameString("Matt"));
console.log(nameString("javaScript"));

// // 4} 

// // Create a function that takes a boolean variable flag and returns it as a string.
// // Examples
// // boolToString(true) ➞ "true"
// // boolToString(false) ➞ "false"

function boolToString(str) {
    // return str.toString()
    // return str + ""
    // return `${str}`
    let strbool = str ? "true" : "false";
    return strbool
}
console.log(boolToString(true));
console.log(boolToString(false));


// 5}  

// Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// Example
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11

function calculator(num) {
    return eval(num);
}

console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));




// 6} 

// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
// Can you help her?
// Examples
// greeting("Matt") ➞ "Hello, Matt!"
// greeting("Helen") ➞ "Hello, Helen!"
// greeting("Mubashir") ➞ "Hello, my Love!"

function greeting(str) {
    return `Hello, ${str === 'Mubashir' ? 'my love' : str}!`
}

console.log(greeting("Matt"));
console.log(greeting("Helen"));
console.log(greeting("Mubashir"));


// 7}

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ falseu
// comp("hello", "edabit") ➞ false


function comp(str, str1) {
    // return str.length === str1.length
    if (str.length === str1.length) {
        return true
    }
    return false
}


console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));

// 8}

// Create a function that returns true if a string is empty and false otherwise.
// Examples
// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false

function isEmpty(str) {
    return str === "" ? true : false
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));

// / 9}

// Write a template string according to the following example:
// Example
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

const a = "John";
const b = "Joe";
const c = "Jack";

console.log(`Their names were : ${a}, ${b} and ${c}`);

// 10}

// Write a function that returns the length of a string. Make your function recursive.
// Examples
// length("apple") ➞ 5
// length("make") ➞ 4
// length("a") ➞ 1
// length("") ➞ 0

function length(str) {
    return str.length
}

console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));

// 11}

// Create a function that takes a string and returns it as an integer.
// Examples
// stringInt("6") ➞ 6
// stringInt("1000") ➞ 1000
// stringInt("12") ➞ 12

function stringInt(str) {
    // return Number(str)
    // return parseInt(str)
    // return  str * 1;
    return str / 1
}

console.log(stringInt("6"))
console.log(stringInt("1000"))
console.log(stringInt("12"))

// 12}

// Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// concatName("First", "Last") ➞ "Last, First"
// concatName("John", "Doe") ➞ "Doe, John"
// concatName("Mary", "Jane") ➞ "Jane, Mary"

function concatName(str, str1) {
    // return str + ' ' + str1
    // return `${str} ${str1} `
    return str.concat(" " + str1)
}

console.log(concatName("First", "Last"));
console.log(concatName("John", "Doe"));
console.log(concatName("Mary", "Jane"));

// 13}

// Create a function that evaluates an equation.
// Examples
// eq("1+2") ➞ 3
// eq("6/(9-7)") ➞ 3
// eq("3+2-4") ➞ 1

function eq(num) {
    return eval(num)
}
console.log(eq("1+2"));
console.log(eq("6/(9-7)"));
console.log(eq("3+2-4"));

// 14}

// Given a string, return true if its length is even or false if the length is odd.
// Examples
// oddOrEven("apples") ➞ true
// // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.
// oddOrEven("pears") ➞ false
// // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.
// oddOrEven("cherry") ➞ true

function oddOrEven(str) {
    return str.length === 6 ? true : false
}
console.log(oddOrEven("apples"));
console.log(oddOrEven("pears"));
console.log(oddOrEven("cherry"));

// 15}

// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
// Examples:
// intToString(4) ➞ "4"
// stringToInt("4") ➞ 4
// intToString(29348) ➞ "29348"

function intToString(numstr) {
    return numstr.toString()
}

function stringToInt(strnum) {
    return Number(strnum)
}

console.log(intToString(4));
console.log(stringToInt("4"));
console.log(intToString(29348));

// 16}

// Create a function that takes a word and returns the new word without including the first character.
// Examples
// newWord("apple") ➞ "pple"
// newWord("cherry") ➞ "herry"
// newWord("plum") ➞ "lum"

function newWord(str) {
    return str.slice(1)
}
console.log(newWord("apple"))
console.log(newWord("cherry"))
console.log(newWord("plum"))

// 17}

// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// Examples
// helloName("Gerald") ➞ "Hello Gerald!"
// helloName("Tiffany") ➞ "Hello Tiffany!"
// helloName("Ed") ➞ "Hello Ed!"

function helloName(str) {
    // return "Hello " + str
    return `Hello ${str}`
}

console.log(helloName("Gerald"));
console.log(helloName("Tiffany"));
console.log(helloName("Ed"));

// 18}

// Create a function that takes an array of numbers or letters and returns a string.
// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(str) {
    // return str.toString()
    // return str + str
    return str.join("")
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// 19}

// Create a function that takes an array and a string as arguments and returns the index of the string.
//     Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

function findIndex(arr, str) {
    return arr.indexOf(str)
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// 20}

// reate a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0
// Examples
// word("one") ➞ 1
// word("two") ➞ 2
// word("nine") ➞ 9


function word(word) {
    let obj = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "zero": 0
    }
    return obj[word]
}
console.log(word("one"));
console.log(word("two"));
console.log(word("nine"));

// 21}

// Create a function that returns true if a string contains any spaces.
// Examples
// hasSpaces("hello") ➞ false
// hasSpaces("hello, world") ➞ true
// hasSpaces(" ") ➞ true
// hasSpaces("") ➞ false
// hasSpaces(",./!@#") ➞ false

function hasSpaces(str) {
    // return str.indexOf(" ") !== -1
    return str.includes(" ")
}


console.log(hasSpaces("hello"));
console.log(hasSpaces("hello, world"));
console.log(hasSpaces(" "));
console.log(hasSpaces(""));
console.log(hasSpaces(",./!@#"));

// 22}

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
// Examples
// isLastCharacterN("Aiden") ➞ true
// isLastCharacterN("Piet") ➞ false
// isLastCharacterN("Bert") ➞ false
// isLastCharacterN("Dean") ➞ true

function isLastCharacterN(str) {
    return str.includes("n")
}
console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Piet"));
console.log(isLastCharacterN("Bert"));
console.log(isLastCharacterN("Dean"));

// 23}

// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// Example:
// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
// toNumberArray(["91", "44"]) ➞ [91, 44]
// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

function toNumberArray(arrstrnum) {
    // return arrstrnum.map(elm => elm * 1)
    return arrstrnum.map(Number)

}

console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));


// 24}

// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
// Examples
// frontThree("Python") ➞ "PytPytPyt"
// frontThree("Cucumber") ➞ "CucCucCuc"
// frontThree("bioshock") ➞ "biobiobio"

function frontThree(str) {
    return str.slice(0, 3).repeat(3)
}
console.log(frontThree("Python"));
console.log(frontThree("Cucumber"));
console.log(frontThree("bioshock")); 
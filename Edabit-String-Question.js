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


// 2}

// // Write a function that returns the string "something" joined with a space " " and the given argument a.
// // Examples
// // giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// // giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// // giveMeSomething("something") ➞ "something something"

function giveMeSomething(str) {
    // const add = "something";
    // return add.concat(" " + str)
    // return "somthing " + str
    return `somethings ${str}`
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
let concatstr = " Edabit"
return str.concat(concatstr)
return str + " Edabit"
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

function stringInt(str) {
    // return Number(str)
    // return parseInt(str)
    // return str * 1;
    return str / 1
}

console.log(stringInt("6"))
console.log(stringInt("1000"))
console.log(stringInt("12"))


// 7} 

// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
// Can you help her?
// Examples
// greeting("Matt") ➞ "Hello, Matt!"
// greeting("Helen") ➞ "Hello, Helen!"
// greeting("Mubashir") ➞ "Hello, my Love!"

function greeting(str) {
    // return `Hello, ${str === 'Mubashir' ? 'my love' : str}!`
    let concat = `Hello ${str}`
    if (concat === "Hello Mubashir") {
        return "Hello my love"
    } else {
        return concat
    }
}

console.log(greeting("Matt"));
console.log(greeting("Helen"));
console.log(greeting("Mubashir"));


// 8}

// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Examples
// comp("AB", "CD") ➞ true
// comp("ABC", "DE") ➞ false
// comp("hello", "edabit") ➞ false


function comp(str, str1) {
    return str.length === str1.length
    // if (str.length === str1.length) {
    //     return true
    // }
    // return false
}


console.log(comp("AB", "CD"));
console.log(comp("ABC", "DE"));
console.log(comp("hello", "edabit"));

// 9}

// Create a function that returns true if a string is empty and false otherwise.
// Examples
// isEmpty("") ➞ true
// isEmpty(" ") ➞ false
// isEmpty("a") ➞ false

function isEmpty(str) {
    // return str === "" ? true : false
    if (str === "") {
        return true
    } else {
        return false
    }
}
console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("a"));

// 10}

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

// 11}

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

// 12}

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

// 13}

// Given two strings, firstName and lastName, return a single string in the format "last, first".
// Examples
// concatName("First", "Last") ➞ "Last, First"
// concatName("John", "Doe") ➞ "Doe, John"
// concatName("Mary", "Jane") ➞ "Jane, Mary"

function concatName(str, str1) {
    return str + ' ' + str1
    // return `${str} ${str1}`
    // return str.concat(" " + str1)
}

console.log(concatName("First", "Last"));
console.log(concatName("John", "Doe"));
console.log(concatName("Mary", "Jane"));

// 14}

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

// 15}

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
    return str.length%2===0 ? true : false
//     if (str.length%2===0) {
//         return true
//     } else {
//         return false
//     }
}
console.log(oddOrEven("apples"));
console.log(oddOrEven("pears"));
console.log(oddOrEven("cherry"));

// 16}

// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
// Examples:
// intToString(4) ➞ "4"
// stringToInt("4") ➞ 4
// intToString(29348) ➞ "29348"

function intToString(numstr) {
    return numstr.toString()
    // return "" + numstr
    // return `${numstr}`
}

function stringToInt(strnum) {
    return Number(strnum)
}

console.log(intToString(4));
console.log(stringToInt("4"));
console.log(intToString(29348));

// 17}

// Create a function that takes a word and returns the new word without including the first character.
// Examples
// newWord("apple") ➞ "pple"
// newWord("cherry") ➞ "herry"
// newWord("plum") ➞ "lum"

function newWord(str) {
    // return str.slice(1)
    // return str.substring(1)
    return str.substr(1)

}
console.log(newWord("apple"))
console.log(newWord("cherry"))
console.log(newWord("plum"))

// 18}

// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// Examples
// helloName("Gerald") ➞ "Hello Gerald!"
// helloName("Tiffany") ➞ "Hello Tiffany!"
// helloName("Ed") ➞ "Hello Ed!"


let helloName = (str) => {
    // return "Hello " + str
    // return `Hello ${str}`
    let add = "Hello"
    return add.concat(" " + str)
}

console.log(helloName("Gerald"));
console.log(helloName("Tiffany"));
console.log(helloName("Ed!"));

// 19}

// Create a function that takes an array of numbers or letters and returns a string.
// Examples
// arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

function arrayToString(str) {
    // return str.toString()
    //  return "" + str.join("")
    // return str.join("")
    return `${str.join("")}`
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// 20}

// Create a function that takes an array and a string as arguments and returns the index of the string.
//     Examples
// findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// findIndex(["a", "g", "y", "d"], "d") ➞ 3
// findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

function findIndex(arr, str) {
    // return arr.indexOf(str)
    // return arr.findIndex(elm => elm.includes(str))
    return arr.lastIndexOf(str)
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// 21}

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
    // let obj = {
    //     "one": 1,
    //     "two": 2,
    //     "three": 3,
    //     "four": 4,
    //     "five": 5,
    //     "six": 6,
    //     "seven": 7,
    //     "eight": 8,
    //     "nine": 9,
    //     "zero": 0
    // }
    // return obj[word]

    switch (word) {
        case "one":
            return 1
        case "two":
            return 2
        case "three":
            return 3
        case "four":
            return 4
        case "five":
            return 5
        case "six":
            return 6
        case "seven":
            return 7
        case "eigth":
            return 8
        case "nine":
            return 9
        case "zero":
            return 0
    }
}
console.log(word("one"));
console.log(word("two"));
console.log(word("nine"));

// 22}

// Create a function that returns true if a string contains any spaces.
// Examples
// hasSpaces("hello") ➞ false
// hasSpaces("hello, world") ➞ true
// hasSpaces(" ") ➞ true
// hasSpaces("") ➞ false
// hasSpaces(",./!@#") ➞ false



function hasSpaces(str) {
    // return str.indexOf(" ") !== -1 ? true : false
    // return str.indexOf(" ") !== -1 
    return str.includes(" ")
    // return str.lastIndexOf(" ") !== -1
}

console.log(hasSpaces("hello"));
console.log(hasSpaces("hello, world"));
console.log(hasSpaces(" "));
console.log(hasSpaces(""));
console.log(hasSpaces(",./!@#"));

// 23}

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
// Examples
// isLastCharacterN("Aiden") ➞ true
// isLastCharacterN("Piet") ➞ false
// isLastCharacterN("Bert") ➞ false
// isLastCharacterN("Dean") ➞ true

function isLastCharacterN(str) {
    // return str.includes("n")
    // return str[str.length-1] === 'n';
    // return str.endsWith('n')
    // return str.charAt(str.length - 1) === 'n';
    return str.at(str.length - 1) === 'n'
}
console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Piet"));
console.log(isLastCharacterN("Bert"));
console.log(isLastCharacterN("Dean"));

// 24}

// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// Example:
// ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// Examples
// toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
// toNumberArray(["91", "44"]) ➞ [91, 44]
// toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

function toNumberArray(arrstrtonum) {
    // return arrstrtonum.map(elm => elm * 1)
    return arrstrtonum.map(Number)
}

console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));


// 25}

// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
// Examples
// frontThree("Python") ➞ "PytPytPyt"
// frontThree("Cucumber") ➞ "CucCucCuc"
// frontThree("bioshock") ➞ "biobiobio"

function frontThree(str) {
    // return str.slice(0, 3).repeat(3)
    // return str.substring(0 , 3).repeat(3)
    return str.substr(0, 3).repeat(3)
}
console.log(frontThree("Python"));
console.log(frontThree("Cucumber"));
console.log(frontThree("bioshock"));


// 26}

// Create a function that takes a string txt and a number n and returns the repeated string n number of times.
// If given argument txt is not a string, return Not A String !!
// Examples
// repeatString("Mubashir", 2) ➞ "MubashirMubashir"
// repeatString("Matt", 3) ➞ "MattMattMatt"
// repeatString(1990, 7) ➞ "Not A String !!"

function repeatString(str, num) {
    return str === 1990 ? "Not A String !!" : str.repeat(num)
    // if (typeof str === 'number') {
    //     return "Not A String"
    // }
    // return str.repeat(num)
}

console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));
console.log(repeatString(1990, 7));

// 27}

// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."
// relationToLuke("Leia") ➞ "Luke, I am your sister."
// relationToLuke("Han") ➞ "Luke, I am your brother in law."

function relationToLuke(str) {
    switch (str) {

        case "Darth Vader":
            return "Luke, I am your father"

        case "Leia":
            return "Luke, I am your sister"

        case "Han":
            return "Luke, I am your brother in law"
    }

    // let obj = {
    //     "Darth Vader": "Luke, I am your father",
    //     "Leia": "Luke, I am your sister",
    //     "Han": "Luke, I am your brother in law"
    // }
    // return obj[str]
}

console.log(relationToLuke("Darth Vader"));
console.log(relationToLuke("Leia"));
console.log(relationToLuke("Han"));

// 28}

// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
// Examples
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"


function cityFacts(obj) {
    return `${obj.name} has a population of ${obj.population} is situated in ${obj.continent}`
}

console.log(cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
}));

console.log(cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
}));


// 29}

// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
// Examples
// isPlural("changes") ➞ true
// isPlural("change") ➞ false
// isPlural("dudes") ➞ true
// isPlural("magic") ➞ false

function isPlural(str) {
    // return str.includes("s")
    // return str[str.length-1] === "s"
    // return str[str.length - 1] === "s" ? true : false;
    return str.endsWith("s")
}

console.log(isPlural("changes"));
console.log(isPlural("change"));
console.log(isPlural("dudes"));
console.log(isPlural("magic"));

// 30}

// Create a function that takes a string and returns the concatenated first and last character.
// Examples
// firstLast("ganesh") ➞ "gh"
// firstLast("kali") ➞ "ki"
// firstLast("shiva") ➞ "sa"
// firstLast("vishnu") ➞ "vu"
// firstLast("durga") ➞ "da"

function firstLast(str) {
    // return str[0] + str[str.length - 1]
    // return str[str.length = 0] + str[str.length - 1]
    let first = str.charAt(0);
    let last = str.charAt(str.length - 1);
    return first + last
}
console.log(firstLast("ganesh"));
console.log(firstLast("kali"));
console.log(firstLast("shiva"));
console.log(firstLast("vishnu"));
console.log(firstLast("durga"));



// 31}

// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
// Examples
// stutter("incredible") ➞ "in... in... incredible?"
// stutter("enthusiastic") ➞ "en... en... enthusiastic?"
// stutter("outstanding") ➞ "ou... ou... outstanding?"


function stutter(str) {
    // let repeated = str.substring(0, 2) + "..."
    let repeated = str.slice(0, 2) + "...";
    return repeated + repeated + str + "?"
}

console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("outstanding"));

// 32}

// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.
// Examples
// reversePsychology("wash the dishes") ➞ "Do not wash the dishes."
// reversePsychology("eat your lunch") ➞ "Do not eat your lunch."
// reversePsychology("go to school") ➞ "Do not go to school."

function reversePsychology(str) {
    return "Do not " + str
    // return `Do not ${str}`
    // let add = "Do not";
    // return add.concat(" " + str)
}

console.log(reversePsychology("wash the dishes"));
console.log(reversePsychology("eat your lunch"));
console.log(reversePsychology("go to school"));

// 33}

// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
// Examples
// greaterThanOne("1/2") ➞ false
// greaterThanOne("7/4") ➞ true
// greaterThanOne("10/10") ➞ false

function greaterThanOne(str) {
    return eval(str) > 1
}

console.log(greaterThanOne("1/2"));
console.log(greaterThanOne("7/4"));
console.log(greaterThanOne("10/10"));

// 34}

// reate a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// Examples
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday("sad") ➞ "Today, I am feeling sad"
// moodToday() ➞ "Today, I am feeling neutral"

function moodToday(str) {
    // return `Today I am feeling  ${str === undefined ? "neutral" : str}`;

    if (str === undefined) {
        return   "Today I am felling nature"
    }
    return "Today I am felling " + str 
}

console.log(moodToday("happy"));
console.log(moodToday("sad"));
console.log(moodToday());

// 35}

// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
// Examples
// countSyllables("Hehehehehehe") ➞ 6
// countSyllables("bobobobobobobobo") ➞ 8
// countSyllables("NANANA") ➞ 3

function countSyllables(str) {
    return str.length / 2
}

console.log(countSyllables("Hehehehehehe"));
console.log(countSyllables("bobobobobobobobo"));
console.log(countSyllables("NANANA"));

// 36}

// Create a function that returns the ASCII value of the passed in character.
// Examples
// ctoa("A") ➞ 65
// ctoa("m") ➞ 109
// ctoa("[") ➞ 91
// ctoa("\") ➞ 92
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function ctoa(arr) {
    // return arr.codePointAt()
    return arr.charCodeAt()
}

console.log(ctoa("A"));
console.log(ctoa("m"));
console.log(ctoa("["));
console.log(ctoa("/"));

// 37}

// Write a function that validates whether two strings are identical. Make it case insensitive.
// Examples
// match("hello", "hELLo") ➞ true
// match("motive", "emotive") ➞ false
// match("venom", "VENOM") ➞ true
// match("mask", "mAskinG") ➞ false

function match(str, str1) {
    // return str.length === str1.length ? true : false
    // if (str.length === str1.length) {
    //     return true
    // } else {
    //     return false
    // }

    return str.toLowerCase() === str1.toLowerCase()
}

console.log(match("hello", "hELLo"));
console.log(match("motive", "emotive"));
console.log(match("venom", "VENOM"));
console.log(match("mask", "mAskinG"));

// 38}

// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.
// Examples
// amazingEdabit("edabit is amazing.") ➞ "edabit is amazing."
// amazingEdabit("Mubashir is amazing.") ➞ "Mubashir is not amazing."
// amazingEdabit("Infinity is amazing.") ➞ "Infinity is not amazing."


function amazingEdabit(str) {
    let arr = str.split(" ")
    // return arr[0] === "edabit" ? `${arr[0]} is amazing` : `${arr[0]} is not amazing`

    if (arr[0] === "edabit") {
        return "edabit is amazing"
    } else {
        return arr[0] + " " + "is not amazing"
    }
}

console.log(amazingEdabit("edabit is amazing."));
console.log(amazingEdabit("Mubashir is amazing."));
console.log(amazingEdabit("Infinity is amazing."));

// 39}

// Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.
// Examples
// intOrString(8) ➞ "int"
// intOrString("Hello") ➞ "str"
// intOrString(9843532) ➞ "int"

function intOrString(str) {
    // return typeof str === "number" ? "int" : "str"
    if(typeof str === "number"){
        return "int"
    }else {
        return "str"
    }

}

console.log(intOrString(8));
console.log(intOrString("Hello"));
console.log(intOrString(9843532));

// 40}

// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".
// Examples
// helloWorld(3) ➞ "Hello"
// helloWorld(5) ➞ "World"
// helloWorld(15) ➞ "Hello World"

function helloWorld(num) {
    if (num % 15 === 0) return "Hello World";
    if (num % 3 === 0) return "Hello";
    if (num % 5 === 0) return "world";
}

console.log(helloWorld(3));
console.log(helloWorld(5));
console.log(helloWorld(15));

// 41}

// Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.
// Examples
// toInt("77") ➞ 77
// toInt("532") ➞ 532
// toStr(77) ➞ "77"
// toStr(532) ➞ "532"

function toInt(int) {
    return Number(int)
}
function toStr(str) {
    return str.toString()
}

console.log(toInt("77"));
console.log(toInt("532"));
console.log(toStr(77));
console.log(toStr(532));

// 42}

// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
// Examples
// longBurp(3) ➞ "Burrrp"
// longBurp(5) ➞ "Burrrrrp"
// longBurp(9) ➞ "Burrrrrrrrrp"



function longBurp(num) {
    return "Bu" + "r".repeat(num) + "p";
    // return  `Bu${Array(num).fill("r").join("")}p`
}

console.log(longBurp(3));
console.log(longBurp(5));
console.log(longBurp(9));

// 43}

// Create a function that takes a string and returns a string with spaces in between all of the characters.
// Examples
// spaceMeOut("space") ➞ "s p a c e"
// spaceMeOut("far out") ➞ "f a r   o u t"
// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

function spaceMeOut(str) {
    // return str.split("").join(" ")
    return str.split('').map(function (elm) {
        return elm + ""
    }).join(" ").trim()
}

console.log(spaceMeOut("space"));
console.log(spaceMeOut("far out"));
console.log(spaceMeOut("elongated musk"));

// 44}

// Create a function that counts how many D's are in a sentence.
// Examples
// countDs("My friend Dylan got distracted in school.") ➞ 4
// countDs("Debris was scattered all over the yard.") ➞ 3
// countDs("The rodents hibernated in their den.") ➞ 3

function countDs(str) {
    let main = str.split('').filter(elm => elm.toLowerCase() === 'd').length;
    return main
}
console.log(countDs("My friend Dylan got distracted in school."));
console.log(countDs("Debris was scattered all over the yard."));
console.log(countDs("The rodents hibernated in their den."));

// 45}

// Create a function which makes the last character of a string repeat n number of times.
// Examples
// modifyLast("Hello", 3) ➞ "Hellooo"
// modifyLast("hey", 6) ➞ "heyyyyyy"
// modifyLast("excuse me what?", 5) ➞ "excuse me what?????"

function modifyLast(str, num) {
    // let word = str[str.length - 1]
    // let modifyword = word.repeat(num)
    // let strmodify = str.slice(0, -1) + modifyword
    // return strmodify

    let main = str.charAt(str.length - 1);
    return str + main.repeat(num)
}

console.log(modifyLast("Hello", 3));
console.log(modifyLast("hey", 6));
console.log(modifyLast("excuse me what?", 5));


// 46}

// Create a function that will put the first argument, a character, between every word in the second argument, a string.
// Examples
// add("R", "javascript is fun") ➞ "javascriptRisRfun"
// add("#", "hello world!") ➞ "hello#world!"
// add("#", " ") ➞ "#"

function add(char, str) {
    // return str.split(" ").join(char)
    let add = str.split(" ").join(char)
    return add
}

console.log(add("R", "javascript is fun"));
console.log(add("#", "hello world!"));
console.log(add("#", " "));

// 47}

// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.
// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)
// Given a string of what the overlapping claps sounded like, return how many claps were made in total.
// Examples
// countClaps("ClaClaClaClap!") ➞ 4
// countClaps("ClClClaClaClaClap!") ➞ 6
// countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9

function countClaps(str) {
    const matches = str.match("/Clap!/g") || [];
    const count = matches.reduce((total, match) => total + match.length - 3, 0)
    return count
}

console.log(countClaps("ClaClaClaClap!"));
console.log(countClaps("ClClClaClaClaClap!"));
console.log(countClaps("CCClaClClap!Clap!ClClClap!"));


// 48}

function findIndex(arr, index) {
    // if (arr !== index) {
    //     return arr.indexOf(index)
    // } else {
    //     return -1
    // }

    if (arr.includes(index)) {
        return arr.indexOf(index)
    }
    return -1
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"]));


// 49}

// Many IDS (for emails or Google ID) are created using the person's name.
// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.
// Examples
// createID("mary", "lamb") ➞ "mLam"
// createID("John", "SMITH") ➞ "jSmi"
// createID("mary", "smith") ➞ "mSmi"


function createID(fname, lname) {
    // return `${fname[0].toLowerCase()}${lname[0].toUpperCase()}${lname.slice(1, 3).toLowerCase()}`
    return `${fname[0].toLowerCase()}${lname[0].toUpperCase()}${lname.substring(1, 3).toLowerCase()}`
}

console.log(createID("mary", "lamb"));
console.log(createID("John", "SMITH"));
console.log(createID("mary", "smith"));


// 50}
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// Examples
// getCase("whisper...") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"
// getCase("Indoor Voice") ➞ "mixed"

function getCase(str) {
    if (str === str.toLowerCase()) {
        return "lower"
    } else if (str === str.toUpperCase()) {
        return "upper"
    } else {
        return "mixed"
    }
}
console.log(getCase("whisper..."));
console.log(getCase("SHOUT!"));
console.log(getCase("Indoor Voice"));

// 51}

// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.
// Examples
// isBoiling("212F") ➞ true
// isBoiling("100C") ➞ true
// isBoiling("0F") ➞ false

function isBoiling(str) {
    // return str === "0F" ? false : true
    if (str !== "0F") {
        return true
    } else {
        return false
    }
}

console.log(isBoiling("212F"));
console.log(isBoiling("100C"));
console.log(isBoiling("0F"));

// 52}

// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.
// Create a function that takes a string and returns a string.
// Examples
// toScottishScreaming("hello world") ➞ "HELLE WERLD"
// toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"
// toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEEETEFEL!"


function toScottishScreaming(str) {
    const vowels = /[aeiou]/gi;

    return str.toUpperCase().replace(vowels, 'E');
}

console.log(toScottishScreaming("hello world"));
console.log(toScottishScreaming("Mr. Fox was very naughty"));
console.log(toScottishScreaming("Butterflies are beautiful!"));


// 53}

// Create a function that flips M's to W's (all uppercase).
// Examples
// wumbo("I LOVE MAKING CHALLENGES") ➞ "I LOVE WAKING CHALLENGES"
// wumbo("MEET ME IN WARSAW") ➞ "WEET WE IN WARSAW"
// wumbo("WUMBOLOGY") ➞ "WUWBOLOGY"

function wumbo(str) {
    let replacestr = /[M]/gi;
    return str.toUpperCase().replace(replacestr, "W")

    // return str.split(' ').map(elm => elm === 'M' || elm === 'm' ? 'W' : elm).join(' ')
}
console.log(wumbo("I LOVE MAKING CHALLENGES"));
console.log(wumbo("MEET ME IN WARSAW"));
console.log(wumbo("WUMBOLOGY"));

// 54}

// Create a function based on the input and output. Look at the examples, there is a pattern.
// Examples
// secret("div*2") ➞ "<div></div><div></div>"
// secret("p*1") ➞ "<p></p>"
// secret("li*3") ➞ "<li></li><li></li><li></li>"

function secret(str) {
    if (str === "div*2") {
        return "<div></div><div></div>"
    } else if (str === "p*1") {
        return "<p></p>"
    }
    return "<li></li><li></li><li></li>"
}
console.log(secret("div*2"));
console.log(secret("p*1"));
console.log(secret("li*3"));

// 55}

// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

// Examples
// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]
// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]
// filterArray(["Nothing", "here"]) ➞ []

function filterArray(arr) {
    // return arr.filter(num => typeof num === 'number')

    return arr.reduce((a, b) => {
        if (typeof b === 'number') {
            a.push(b)
        }
        return a
    }, [])
}

console.log(filterArray([1, 2, 3, "a", "b", 4]));
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));
console.log(filterArray(["Nothing", "here"]));


// 56

// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
// Examples
// integerBoolean("100101") ➞ [true, false, false, true, false, true]
// integerBoolean("10") ➞ [true, false]
// integerBoolean("001") ➞ [false, false, true]

function integerBoolean(str) {
    return str.split('').map(elm => elm === '1')
}
console.log(integerBoolean("100101"));
console.log(integerBoolean("10"));
console.log(integerBoolean("001"));

// 57}

// Given a letter and an array of words, return whether the letter does not appear in any of the words.
// Examples
// forbiddenLetter("r", ["rock", "paper", "scissors"]) ➞ false
// forbiddenLetter("a", ["spoon", "fork", "knife"]) ➞ true
// forbiddenLetter("m", []) ➞ true

function forbiddenLetter(word, arr) {
    // return arr.every(arr => !arr.includes(word))
    return !arr.some(arr => arr.includes(word))
}
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));
console.log(forbiddenLetter("m", []));

// 58}

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.
// Examples
// removeNumbers("mubashir1") ➞ "mubashir"
// removeNumbers("12ma23tt") ➞ "matt"
// removeNumbers("e1d2a3b4i5t6") ➞ "edabit"
// Notes
// READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
// Don't overthink this challenge; it's not supposed to be hard.

function removeNumbers(str) {
    return str.split('').filter(c => !parseInt(c)).join('')
}

console.log(removeNumbers("mubashir1"));
console.log(removeNumbers("12ma23tt"));
console.log(removeNumbers("e1d2a3b4i5t6"));

// 59

// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.
// Examples
// uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept") ➞ 2
// uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct") ➞ 1

function uploadCount(arr, word) {
    return arr.filter(elm => elm.includes(word)).length
}

console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"));
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct"));

// 60}

// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

// Examples
// evenOddString("mubashir") ➞ "mbsi uahr"
// // Letters at even indexes = "mbsi"
// // Letters at odd indexes = "uahr"
// // Join both strings with a space
// evenOddString("edabit") ➞ "eai dbt"
// evenOddString("airforce") ➞ "aroc ifre"


function evenOddString(str) {
    let even = "";
    let odd = "";
    for (let i = 0; i < str.length; i += 2) {
        even += str[i]
        if (i + 1 < str.length) {
            odd += str[i + 1];
        }
    }
    return even + " " + odd
}

console.log(evenOddString("edabit"));
console.log(evenOddString("airforce")); 

// 61}

// Create a function that takes two numbers and a mathematical operator and returns the result.
// Examples
// calculate(4, 9, "+") ➞ 13
// calculate(12, 5, "-") ➞ 7
// calculate(6, 3, "*") ➞ 18
// calculate(25, 5, "/") ➞ 5
// calculate(14, 3, "%") ➞ 2

function calculate(num, num2, str) {

    let main = 0;

    switch (str) {
        case "+":
            main = num + num2
            break
        case "-":
            main = num - num2
            break
        case "*":
            main = num * num2
            break
        case "/":
            main = num / num2
            break
        case "%":
            main = num % num2
            break
        default:
            return "not a number"
    }
    return main
}

console.log(calculate(4, 9, "+"));
console.log(calculate(12, 5, "-"));
console.log(calculate(6, 3, "*"));
console.log(calculate(25, 5, "/"));
console.log(calculate(14, 3, "%"));



// 62}

// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:
// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.
// Examples
// arithmeticProgression(1, 2, 5) ➞ "1, 3, 5, 7, 9"
// arithmeticProgression(1, 0, 5) ➞ "1, 1, 1, 1, 1"
// arithmeticProgression(1, -3, 10) ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"

function arithmeticProgression(num1, num2, num3) {
    if (num3 === 1) {
        return num1.toString()
    }
    return arithmeticProgression(num1, num2, num3 - 1) + ", " + (num1 + (num3 - 1) * num2)
}
console.log(arithmeticProgression(1, 2, 5));
console.log(arithmeticProgression(1, 0, 5));
console.log(arithmeticProgression(1, -3, 10));


// 63}

// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.
// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:
// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.
// Examples
// keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"
// keyboardMistakes("DUBL1N") ➞ "DUBLIN"
// keyboardMistakes("51NG4P0RE") ➞ "SINGAPORE"


function keyboardMistakes(str) {
  let main = ["4", "5", "1", "0"];
  let arr = "";
  if (main[0].includes(str)) {
    arr += "A"
  } else {
     arr += str
  }
  return arr
}
console.log(keyboardMistakes("MUB45H1R"));
console.log(keyboardMistakes("DUBL1N"));
console.log(keyboardMistakes("51NG4P0RE")); 

// 64}

// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.
// Examples
// str1 = "mubashir"
// str2 = "edabit"
// longestString(str1, str2) ➞ "abdehimrstu"
// // Contains sorted and distinct letters of the given strings.
// str1 = "abcdefghijklmnopqrstuvwxyz"
// str2 = "abcdefghijklmnopqrstuvwxyz"
// longestString(str1, str2) ➞ "abcdefghijklmnopqrstuvwxyz"
// Contains sorted and distinct letters of the given strings.


function longestString(str1, str2) {
  let add = Array.from(new Set(str1 + str2)).sort();
  return add.join("")
}

const str1 = "mubashir";
const str2 = "edabit"
console.log(longestString(str1, str2));

let str3 = "abcdefghijklmnopqrstuvwxyz"
let str4 = "abcdefghijklmnopqrstuvwxyz"
console.log(longestString(str3, str4));


// 65}

// Create a function that returns the last value of the last item in an array or string.
// Examples
// lastItem([0, 4, 19, 34, 50, -9, 2]) ➞ 2
// lastItem("The quick brown fox jumped over the lazy dog") ➞ "g"
// lastItem([]) ➞ undefined

function lastItem(arrstr) {
  return arrstr[arrstr.length - 1];
}
console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));
console.log(lastItem("The quick brown fox jumped over the lazy dog"));
console.log(lastItem([]))


// 66}

// Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.
// Example
// cleanUpArray(["8"]) ➞ [[8], []]
// cleanUpArray(["11"]) ➞ [[], [11]]
// cleanUpArray(["7", "4", "8"]) ➞ [[4, 8], [7]]
// cleanUpArray(["9", "4", "5", "8"]) ➞ [[4, 8], [9, 5]]


function cleanUpArray(arr) {
  let even = arr.filter(num => parseInt(num) % 2 == 0);
  let odd = arr.filter(num => parseInt(num) % 2 !== 0);
  return [even.map(num => parseInt(num)), odd.map(num => parseInt(num))]
}
console.log(cleanUpArray(["8"]));
console.log(cleanUpArray(["11"]));
console.log(cleanUpArray(["7", "4", "8"]));
console.log(cleanUpArray(["9", "4", "5", "8"]));

// 67}

// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.
// See the below examples for a better understanding:
// Examples
// stringPairs("mubashir") ➞ ["mu", "ba", "sh", "ir"]
// stringPairs("edabit") ➞ ["ed", "ab", "it"]
// stringPairs("airforces") ➞ ["ai", "rf", "or", "ce", "s*"]

function stringPairs(str) {
  return str.split('').reduce((pairs, char, index) => {
    if (index % 2 === 0) {
      pairs.push(char + (str[index + 1] || '*'));
    }
    return pairs;
  }, []);
}

console.log(stringPairs("mubashir"));    // ["mu", "ba", "sh", "ir"]
console.log(stringPairs("edabit"));      // ["ed", "ab", "it"]
console.log(stringPairs("airforces"));   // ["ai", "rf", "or", "ce", "s_"]


// 68}

// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).
// Examples
// countCharacters([
//   "###",
//   "###",
//   "###"
// ]) ➞ 9
// countCharacters([
//   "22222222",
//   "22222222",
// ]) ➞ 16
// countCharacters([
//   "------------------"
// ]) ➞ 18
// countCharacters([]) ➞ 0
// countCharacters(["", ""]) ➞ 0

function countCharacters(arr) {
  return arr.join("").length
}

console.log(countCharacters(["###", "###", "###"]));
console.log(countCharacters(["22222222", "22222222",]));
console.log(countCharacters(["------------------"]));
console.log(countCharacters([]));
console.log(countCharacters(["", ""]));


// 69}

// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.
// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".
// Examples
// showdown(
//   "   Bang!        ",
//   "        Bang!   "
// ) ➞ "p1"
// // p1 draws his gun sooner than p2
// showdown(
//   "               Bang! ",
//   "             Bang!   "
// ) ➞ "p2"
// showdown(
//   "     Bang!   ",
//   "     Bang!   "
// ) ➞ "tie"

function showdown(str) {
  return str.trim()
}

console.log(showdown(
  "   Bang!        ",
  "        Bang!   "
)); 

console.log( showdown(
  "               Bang! ",
  "             Bang!   "
));
console.log(showdown(
  "     Bang!   ",
  "     Bang!   "
)); 

// 70}

// Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.
// Examples
// profitMargin(50, 50) ➞ "0.0%"
// profitMargin(28, 39) ➞ "28.2%"
// profitMargin(33, 84) ➞ "60.7%"

function profitMargin(costPrice, salesPrice) {
    let main = ((salesPrice - costPrice) / salesPrice) * 100
    return main.toFixed(1) + "%"
}
console.log(profitMargin(50, 50));
console.log(profitMargin(28, 39));
console.log(profitMargin(33, 84)); 

// 71}

// Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.
// Here is a list of the possible formatting options in Edabit and how to apply them:
// **bold**
// _italics_
// `inline code`
// ~~strikethrough~~
// Challenge
// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.
// For the purposes of this challenge, the style characters are as follows:
// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough
// Examples
// mdFormat("Bold", "b") ➞ "**Bold**"
// mdFormat("leaning text", "i") ➞ "_leaning text_"
// mdFormat("Edabit", "c") ➞ "`Edabit`"
// mdFormat("That's a strike!", "s") ➞ "~~That's a strike!~~"



function mdFormat(str, word) {
    const symbol = {
        b: "**",
        i: "_",
        c: "``",
        s: "~~"
    }
    return `${symbol[word]}${str}${symbol[word]}`
}

console.log(mdFormat("Bold", "b"));
console.log(mdFormat("leaning text", "i"));
console.log(mdFormat("Edabit", "c"));
console.log(mdFormat("That's a strike!", "s"));



console.log(mdFormat("Bold", "b"));
console.log(mdFormat("leaning text", "i"));
console.log(mdFormat("Edabit", "c"));
console.log(mdFormat("That's a strike!", "s"));


// 72}

// Create a function that takes a string and returns the word count. The string will be a sentence.
// Examples
// countWords("Just an example here move along") ➞ 6
// countWords("This is a test") ➞ 4
// countWords("What an easy task, right") ➞ 5
// Notes
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function countWords(str) {
    return str.split(" ").length
}

console.log(countWords("Just an example here move along"));
console.log(countWords("This is a test"));
console.log(countWords("What an easy task, right")); 


// 73}

// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.
// Examples
// stupidAddition(1, 2) ➞ "12"
// stupidAddition("1", "2") ➞ 3
// stupidAddition("1", 2) ➞ null

function stupidAddition(num, num1) {
    if (typeof num === 'number') {
        return num.toString() + num1
    } else if (typeof num1 === "string") {
        return Number(num) + Number(num1)
    } else if (typeof num === "string") {
        return null
    }
}


console.log(stupidAddition(1, 2));
console.log(stupidAddition("1", "2"));
console.log(stupidAddition("1", 2)); 


// 1. write the program for  number is prime or not . if prime return it is prime . else return it is not prime


function primenum(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return "this is not prime number"
        }
    }
    return "this is prime number"
}

let pro = prompt("enter the number")

console.log(primenum(pro));



// 2. find the prime number between 1 to 100



// 3. find the maximum of an array number using for loop

function maximum(arr) {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (max < currentElement) {
            max = currentElement;
        }
    }
    return max;
}

console.log(maximum([2, 4, 5, 7, 8, 9, 5, 2, 3, 23]));



// 4. find the minum of an array number using for loop

function minmum(arr) {
    let min = +Infinity
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (min > currentElement) {
            min = currentElement
        }
    }
    return min
}

console.log(minmum([2, 4, 5, 7, 8, 9, 5, 2, 3, 23]));


// 5. find the sum of an array using for loop 

function sumarr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log(sumarr([1, 2, 3, 45, 5, 7, 8, 9, 75]));


// 6. find the sort of an array using for loop

function sortarr(arr) {
    let main = []
    for (let i = 0; i < arr.length; i++) {
        main.push(arr[i])
    }
    return main.sort()
}

console.log(sortarr(["A", "C", "H", "D", "B", "E", "G", "F"]));
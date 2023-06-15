// // //  1}
// // // This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:
// // // function hello() {
// // // }
// // // All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.
// // // Notes
// // // The returned string must be in all lowercase letters.
// // // If you get stuck on a challenge, find help in the Resources tab.
// // // If you're really stuck, unlock solutions in the Solutions tab.

function hello() {
    return "hello edabit.com";
}
console.log(hello());


// 2}

// // // Write a function that returns the string "something" joined with a space " " and the given argument a.
// // // Examples
// // // giveMeSomething("is better than nothing") ➞ "something is better than nothing"
// // // giveMeSomething("Bob Jane") ➞ "something Bob Jane"
// // // giveMeSomething("something") ➞ "something something"

function giveMeSomething(str) {
    const add = "something";
    return add.concat(" " + str)
    // return "somthing " + str
    // return `somethings ${str}`
}

console.log(giveMeSomething("is better than nothing"));
console.log(giveMeSomething("Bob Jane"));
console.log(giveMeSomething("something"));

// // // 3}

// // // A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
// // // Examples
// // // nameString("Mubashir") ➞ "MubashirEdabit"
// // // nameString("Matt") ➞ "MattEdabit"
// // // nameString("javaScript") ➞ "javaScriptEdabit"

// function nameString(str) {
//     // let concatstr = " Edabit"
//     // return str.concat(concatstr)
//     // return str + " Edabit"
//     return `${str} Edabit`
// }

// console.log(nameString("Mubashir"));
// console.log(nameString("Matt"));
// console.log(nameString("javaScript"));

// // // 4} 

// // // Create a function that takes a boolean variable flag and returns it as a string.
// // // Examples
// // // boolToString(true) ➞ "true"
// // // boolToString(false) ➞ "false"

function boolToString(str) {
    // return str.toString()
    // return str + ""
    // return `${str}`
    let strbool = str ? "true" : "false";
    return strbool
}
console.log(boolToString(true));
console.log(boolToString(false));

// function calculator(num) {
//     return eval(num);
// }

// console.log(calculator("23+4"));
// console.log(calculator("45-15"));
// console.log(calculator("13+2-5*2"));
// console.log(calculator("49/7*2-3"));

// // 5}  

// // Create a function that will handle simple math expressions. The input is an expression in the form of a string.
// // Example
// // calculator("23+4") ➞ 27
// // calculator("45-15") ➞ 30
// // calculator("13+2-5*2") ➞ 5
// // calculator("49/7*2-3") ➞ 11

function calculator(num) {
    return eval(num);
}

console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));




function stringInt(str) {
    // return Number(str)
    // return parseInt(str)
    // return  str * 1;
    return str / 1
}

console.log(stringInt("6"))
console.log(stringInt("1000"))
console.log(stringInt("12"))


// // 6} 

// // Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
// // Can you help her?
// // Examples
// // greeting("Matt") ➞ "Hello, Matt!"
// // greeting("Helen") ➞ "Hello, Helen!"
// // greeting("Mubashir") ➞ "Hello, my Love!"

function greeting(str) {
    return `Hello, ${str === 'Mubashir' ? 'my love' : str}!`
}

console.log(greeting("Matt"));
console.log(greeting("Helen"));
console.log(greeting("Mubashir"));


// // 7}

// // Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// // Examples
// // comp("AB", "CD") ➞ true
// // comp("ABC", "DE") ➞ falseu
// // comp("hello", "edabit") ➞ false


// function comp(str, str1) {
//     // return str.length === str1.length
//     if (str.length === str1.length) {
//         return true
//     }
//     return false
// }


// console.log(comp("AB", "CD"));
// console.log(comp("ABC", "DE"));
// console.log(comp("hello", "edabit"));

// // 8}

// // Create a function that returns true if a string is empty and false otherwise.
// // Examples
// // isEmpty("") ➞ true
// // isEmpty(" ") ➞ false
// // isEmpty("a") ➞ false

// function isEmpty(str) {
//     return str === "" ? true : false
// }
// console.log(isEmpty(""));
// console.log(isEmpty(" "));
// console.log(isEmpty("a"));

// // / 9}

// // Write a template string according to the following example:
// // Example
// // const a = "John";
// // const b = "Joe";
// // const c = "Jack";
// // const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."

// const a = "John";
// const b = "Joe";
// const c = "Jack";

// console.log(`Their names were : ${a}, ${b} and ${c}`);

// // 10}

// // Write a function that returns the length of a string. Make your function recursive.
// // Examples
// // length("apple") ➞ 5
// // length("make") ➞ 4
// // length("a") ➞ 1
// // length("") ➞ 0

// function length(str) {
//     return str.length
// }

// console.log(length("apple"));
// console.log(length("make"));
// console.log(length("a"));
// console.log(length(""));

// // 11}

// // Create a function that takes a string and returns it as an integer.
// // Examples
// // stringInt("6") ➞ 6
// // stringInt("1000") ➞ 1000
// // stringInt("12") ➞ 12

// function stringInt(str) {
//     // return Number(str)
//     // return parseInt(str)
//     // return  str * 1;
//     return str / 1
// }

// console.log(stringInt("6"))
// console.log(stringInt("1000"))
// console.log(stringInt("12"))

// // 12}

// // Given two strings, firstName and lastName, return a single string in the format "last, first".
// // Examples
// // concatName("First", "Last") ➞ "Last, First"
// // concatName("John", "Doe") ➞ "Doe, John"
// // concatName("Mary", "Jane") ➞ "Jane, Mary"

// function concatName(str, str1) {
//     // return str + ' ' + str1
//     // return `${str} ${str1} `
//     return str.concat(" " + str1)
// }

// console.log(concatName("First", "Last"));
// console.log(concatName("John", "Doe"));
// console.log(concatName("Mary", "Jane"));

// // 13}

// // Create a function that evaluates an equation.
// // Examples
// // eq("1+2") ➞ 3
// // eq("6/(9-7)") ➞ 3
// // eq("3+2-4") ➞ 1

// function eq(num) {
//     return eval(num)
// }
// console.log(eq("1+2"));
// console.log(eq("6/(9-7)"));
// console.log(eq("3+2-4"));

// // 14}

// // Given a string, return true if its length is even or false if the length is odd.
// // Examples
// // oddOrEven("apples") ➞ true
// // // The word "apples" has 6 characters.
// // // 6 is an even number, so the program outputs true.
// // oddOrEven("pears") ➞ false
// // // "pears" has 5 letters, and 5 is odd.
// // // Therefore the program outputs false.
// // oddOrEven("cherry") ➞ true

// function oddOrEven(str) {
//     return str.length === 6 ? true : false
// }
// console.log(oddOrEven("apples"));
// console.log(oddOrEven("pears"));
// console.log(oddOrEven("cherry"));

// // 15}

// // You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.
// // Examples:
// // intToString(4) ➞ "4"
// // stringToInt("4") ➞ 4
// // intToString(29348) ➞ "29348"

// function intToString(numstr) {
//     return numstr.toString()
// }

// function stringToInt(strnum) {
//     return Number(strnum)
// }

// console.log(intToString(4));
// console.log(stringToInt("4"));
// console.log(intToString(29348));

// // 16}

// // Create a function that takes a word and returns the new word without including the first character.
// // Examples
// // newWord("apple") ➞ "pple"
// // newWord("cherry") ➞ "herry"
// // newWord("plum") ➞ "lum"

// function newWord(str) {
//     return str.slice(1)
// }
// console.log(newWord("apple"))
// console.log(newWord("cherry"))
// console.log(newWord("plum"))

// // 17}

// // Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.
// // Examples
// // helloName("Gerald") ➞ "Hello Gerald!"
// // helloName("Tiffany") ➞ "Hello Tiffany!"
// // helloName("Ed") ➞ "Hello Ed!"

// function helloName(str) {
//     // return "Hello " + str
//     return `Hello ${str}`
// }

// console.log(helloName("Gerald"));
// console.log(helloName("Tiffany"));
// console.log(helloName("Ed"));

// // 18}

// // Create a function that takes an array of numbers or letters and returns a string.
// // Examples
// // arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"
// // arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"
// // arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"

// function arrayToString(str) {
//     // return str.toString()
//     // return str + str
//     return str.join("")
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// // 19}

// // Create a function that takes an array and a string as arguments and returns the index of the string.
// //     Examples
// // findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2
// // findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1
// // findIndex(["a", "g", "y", "d"], "d") ➞ 3
// // findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0

// function findIndex(arr, str) {
//     return arr.indexOf(str)
// }

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findIndex(["a", "g", "y", "d"], "d"));
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));

// // 20}

// // reate a function that returns a number, based on the string provided. Here is a list of all digits:

// // String	Number
// // "one"	1
// // "two"	2
// // "three"	3
// // "four"	4
// // "five"	5
// // "six"	6
// // "seven"	7
// // "eight"	8
// // "nine"	9
// // "zero"	0
// // Examples
// // word("one") ➞ 1
// // word("two") ➞ 2
// // word("nine") ➞ 9


// function word(word) {
//     let obj = {
//         "one": 1,
//         "two": 2,
//         "three": 3,
//         "four": 4,
//         "five": 5,
//         "six": 6,
//         "seven": 7,
//         "eight": 8,
//         "nine": 9,
//         "zero": 0
//     }
//     return obj[word]
// }
// console.log(word("one"));
// console.log(word("two"));
// console.log(word("nine"));

// // 21}

// // Create a function that returns true if a string contains any spaces.
// // Examples
// // hasSpaces("hello") ➞ false
// // hasSpaces("hello, world") ➞ true
// // hasSpaces(" ") ➞ true
// // hasSpaces("") ➞ false
// // hasSpaces(",./!@#") ➞ false

// function hasSpaces(str) {
//     // return str.indexOf(" ") !== -1
//     return str.includes(" ")
// }


// console.log(hasSpaces("hello"));
// console.log(hasSpaces("hello, world"));
// console.log(hasSpaces(" "));
// console.log(hasSpaces(""));
// console.log(hasSpaces(",./!@#"));

// // 22}

// // Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
// // Examples
// // isLastCharacterN("Aiden") ➞ true
// // isLastCharacterN("Piet") ➞ false
// // isLastCharacterN("Bert") ➞ false
// // isLastCharacterN("Dean") ➞ true

// function isLastCharacterN(str) {
//     return str.includes("n")
// }
// console.log(isLastCharacterN("Aiden"));
// console.log(isLastCharacterN("Piet"));
// console.log(isLastCharacterN("Bert"));
// console.log(isLastCharacterN("Dean"));

// // 23}

// // Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// // Example:
// // ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// // Examples
// // toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
// // toNumberArray(["91", "44"]) ➞ [91, 44]
// // toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

// function toNumberArray(arrstrnum) {
//     // return arrstrnum.map(elm => elm * 1)
//     return arrstrnum.map(Number)

// }

// console.log(toNumberArray(["9.4", "4.2"]));
// console.log(toNumberArray(["91", "44"]));
// console.log(toNumberArray(["9.5", "8.8"]));


// // 24}

// // Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
// // Examples
// // frontThree("Python") ➞ "PytPytPyt"
// // frontThree("Cucumber") ➞ "CucCucCuc"
// // frontThree("bioshock") ➞ "biobiobio"

// function frontThree(str) {
//     return str.slice(0, 3).repeat(3)
// }
// console.log(frontThree("Python"));
// console.log(frontThree("Cucumber"));
// console.log(frontThree("bioshock"));

// // 25}

// // Create a function that takes a string txt and a number n and returns the repeated string n number of times.
// // If given argument txt is not a string, return Not A String !!
// // Examples
// // repeatString("Mubashir", 2) ➞ "MubashirMubashir"
// // repeatString("Matt", 3) ➞ "MattMattMatt"
// // repeatString(1990, 7) ➞ "Not A String !!"

// function repeatString(str, num) {
//     return str === 1990 ? "Not A String !!" : str.repeat(num)
// }

// console.log(repeatString("Mubashir", 2));
// console.log(repeatString("Matt", 3));
// console.log(repeatString(1990, 7));

// // 26}

// // Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
// // Person	Relation
// // Darth Vader	father
// // Leia	sister
// // Han	brother in law
// // R2D2	droid
// // Examples
// // relationToLuke("Darth Vader") ➞ "Luke, I am your father."
// // relationToLuke("Leia") ➞ "Luke, I am your sister."
// // relationToLuke("Han") ➞ "Luke, I am your brother in law."

// function relationToLuke(str) {
//     switch (str) {

//         case "Darth Vander":
//             return "Luke, I am your father"

//         case "Leia":
//             return "Luke, I am your sister"

//         case "Han":
//             return "Luke, I am your brother in law"
//     }
// }

// console.log(relationToLuke("Darth Vader"));
// console.log(relationToLuke("Leia"));
// console.log(relationToLuke("Han"));

// // 27}

// // Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
// // name
// // population
// // continent
// // The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
// // Examples
// // cityFacts({
// //   name: "Paris",
// //   population: "2,140,526",
// //   continent: "Europe"
// // }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
// // cityFacts({
// //   name: "Tokyo",
// //   population: "13,929,286",
// //   continent: "Asia"
// // }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"


// function cityFacts(obj) {
//     return `${obj.name} has a population of ${obj.population} is situated in ${obj.continent}`
// }

// console.log(cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe"
// }));

// console.log(cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia"
// }));


// // 28}

// // Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
// // Examples
// // isPlural("changes") ➞ true
// // isPlural("change") ➞ false
// // isPlural("dudes") ➞ true
// // isPlural("magic") ➞ false

// function isPlural(str) {
//     return str.includes("s")
// }

// console.log(isPlural("changes"));
// console.log(isPlural("change"));
// console.log(isPlural("dudes"));
// console.log(isPlural("magic"));

// // 29}

// // Create a function that takes a string and returns the concatenated first and last character.
// // Examples
// // firstLast("ganesh") ➞ "gh"
// // firstLast("kali") ➞ "ki"
// // firstLast("shiva") ➞ "sa"
// // firstLast("vishnu") ➞ "vu"
// // firstLast("durga") ➞ "da"

// function firstLast(str) {
//     return str[0] + str[str.length - 1]
// }
// console.log(firstLast("ganesh"));
// console.log(firstLast("kali"));
// console.log(firstLast("shiva"));
// console.log(firstLast("vishnu"));
// console.log(firstLast("durga"));

// // 30}

// // Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
// // Examples
// // stutter("incredible") ➞ "in... in... incredible?"
// // stutter("enthusiastic") ➞ "en... en... enthusiastic?"
// // stutter("outstanding") ➞ "ou... ou... outstanding?"


// function stutter(str) {
//     return `in... in... ${str} ?`
// }

// console.log(stutter("incredible"));
// console.log(stutter("enthusiastic"));
// console.log(stutter("outstanding"));

// // 31

// // For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.
// // Examples
// // reversePsychology("wash the dishes") ➞ "Do not wash the dishes."
// // reversePsychology("eat your lunch") ➞ "Do not eat your lunch."
// // reversePsychology("go to school") ➞ "Do not go to school."

// function reversePsychology(str) {
//     // return "Do not " + str
//     return `Do not ${str}`
// }

// console.log(reversePsychology("wash the dishes"));
// console.log(reversePsychology("eat your lunch"));
// console.log(reversePsychology("go to school"));

// // 32}

// // Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
// // Examples
// // greaterThanOne("1/2") ➞ false
// // greaterThanOne("7/4") ➞ true
// // greaterThanOne("10/10") ➞ false

// function greaterThanOne(str) {
//     return eval(str) > 1
// }

// console.log(greaterThanOne("1/2"));
// console.log(greaterThanOne("7/4"));
// console.log(greaterThanOne("10/10"));

// // 33}

// // reate a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// // Examples
// // moodToday("happy") ➞ "Today, I am feeling happy"
// // moodToday("sad") ➞ "Today, I am feeling sad"
// // moodToday() ➞ "Today, I am feeling neutral"

// function moodToday(str) {
//     return `Today I am feeling  ${str === undefined ? "neutral" : str}`;
// }

// console.log(moodToday("happy"));
// console.log(moodToday("sad"));
// console.log(moodToday());

// // 34}

// // Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
// // Examples
// // countSyllables("Hehehehehehe") ➞ 6
// // countSyllables("bobobobobobobobo") ➞ 8
// // countSyllables("NANANA") ➞ 3

// function countSyllables(str) {
//     return str.length / 2
// }

// console.log(countSyllables("Hehehehehehe"));
// console.log(countSyllables("bobobobobobobobo"));
// console.log(countSyllables("NANANA"));

// // 35}

// // Create a function that returns the ASCII value of the passed in character.
// // Examples
// // ctoa("A") ➞ 65
// // ctoa("m") ➞ 109
// // ctoa("[") ➞ 91
// // ctoa("\") ➞ 92
// // Notes
// // Don't forget to return the result.
// // If you get stuck on a challenge, find help in the Resources tab.
// // If you're really stuck, unlock solutions in the Solutions tab.

// function ctoa(arr) {
//     // return arr.codePointAt()
//     return arr.charCodeAt()
// }

// console.log(ctoa("A"));
// console.log(ctoa("m"));
// console.log(ctoa("["));
// console.log(ctoa("/"));

// // 36}

// // Write a function that validates whether two strings are identical. Make it case insensitive.
// // Examples
// // match("hello", "hELLo") ➞ true
// // match("motive", "emotive") ➞ false
// // match("venom", "VENOM") ➞ true
// // match("mask", "mAskinG") ➞ false

// function match(str, str1) {
//     return str.length === str1.length ? true : false
// }

// console.log(match("hello", "hELLo"));
// console.log(match("motive", "emotive"));
// console.log(match("venom", "VENOM"));
// console.log(match("mask", "mAskinG"));

// // 37}

// // Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.
// // Examples
// // amazingEdabit("edabit is amazing.") ➞ "edabit is amazing."
// // amazingEdabit("Mubashir is amazing.") ➞ "Mubashir is not amazing."
// // amazingEdabit("Infinity is amazing.") ➞ "Infinity is not amazing."


// function amazingEdabit(str) {
//     let ar = str.split(" ")
//     return ar[0] === "edabit" ? `${ar[0]} is amazing` : `${ar[0]} is not amazing`
// }

// console.log(amazingEdabit("edabit is amazing."));
// console.log(amazingEdabit("Mubashir is amazing."));
// console.log(amazingEdabit("Infinity is amazing."));

// // 38}

// // Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.
// // Examples
// // intOrString(8) ➞ "int"
// // intOrString("Hello") ➞ "str"
// // intOrString(9843532) ➞ "int"

// function intOrString(str) {
//     return typeof str === "number" ? "int" : "str"
// }

// console.log(intOrString(8));
// console.log(intOrString("Hello"));
// console.log(intOrString(9843532));

// // 39

// // Write a function that takes an integer and:

// // If the number is a multiple of 3, return "Hello".
// // If the number is a multiple of 5, return "World".
// // If the number is a multiple of both 3 and 5, return "Hello World".
// // Examples
// // helloWorld(3) ➞ "Hello"
// // helloWorld(5) ➞ "World"
// // helloWorld(15) ➞ "Hello World"

// function helloWorld(num) {
//     if (num % 15 === 0) return "Hello World";
//     if (num % 3 === 0) return "Hello";
//     if (num % 5 === 0) return "world";
// }

// console.log(helloWorld(3));
// console.log(helloWorld(5));
// console.log(helloWorld(15));

// // 40}

// // Write two functions:

// // toInt() : A function to convert a string to an integer.
// // toStr() : A function to convert an integer to a string.
// // Examples
// // toInt("77") ➞ 77
// // toInt("532") ➞ 532
// // toStr(77) ➞ "77"
// // toStr(532) ➞ "532"

// function toInt(int) {
//     return Number(int)
// }
// function toStr(str) {
//     return str.toString()
// }

// console.log(toInt("77"));
// console.log(toInt("532"));
// console.log(toStr(77));
// console.log(toStr(532));

// // 41}

// // Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
// // Examples
// // longBurp(3) ➞ "Burrrp"
// // longBurp(5) ➞ "Burrrrrp"
// // longBurp(9) ➞ "Burrrrrrrrrp"


// function longBurp(num) {
//     return "Bu" + "r".repeat(num) + "p";
// }

// console.log(longBurp(3));
// console.log(longBurp(5));
// console.log(longBurp(9));

// // 42}

// // Create a function that takes a string and returns a string with spaces in between all of the characters.
// // Examples
// // spaceMeOut("space") ➞ "s p a c e"
// // spaceMeOut("far out") ➞ "f a r   o u t"
// // spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

// function spaceMeOut(str) {
//     return str.split("").join(" ")
// }

// console.log(spaceMeOut("space"));
// console.log(spaceMeOut("far out"));
// console.log(spaceMeOut("elongated musk"));

// // 43}

// // Create a function that counts how many D's are in a sentence.
// // Examples
// // countDs("My friend Dylan got distracted in school.") ➞ 4
// // countDs("Debris was scattered all over the yard.") ➞ 3
// // countDs("The rodents hibernated in their den.") ➞ 3

// function countDs(str) {
//     let str1 = str.match("/d/gi");
//     return str1 ? str1.length : 0
// }
// console.log(countDs("My friend Dylan got distracted in school."));
// console.log(countDs("Debris was scattered all over the yard."));
// console.log(countDs("The rodents hibernated in their den."));

// // 44}

// // Create a function which makes the last character of a string repeat n number of times.
// // Examples
// // modifyLast("Hello", 3) ➞ "Hellooo"
// // modifyLast("hey", 6) ➞ "heyyyyyy"
// // modifyLast("excuse me what?", 5) ➞ "excuse me what?????"

// function modifyLast(str, num) {
//     let word = str[str.length - 1]
//     let modifyword = word.repeat(num)
//     let strmodify = str.slice(0, -1) + modifyword
//     return strmodify
// }

// console.log(modifyLast("Hello", 3));
// console.log(modifyLast("hey", 6));
// console.log(modifyLast("excuse me what?", 5));


// // 45}

// // Create a function that will put the first argument, a character, between every word in the second argument, a string.
// // Examples
// // add("R", "javascript is fun") ➞ "javascriptRisRfun"
// // add("#", "hello world!") ➞ "hello#world!"
// // add("#", " ") ➞ "#"

// function add(char, str) {
//     let newStr = ''
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === ' ') {
//             newStr += char;
//         } else {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// console.log(add("R", "javascript is fun"));
// console.log(add("#", "hello world!"));
// console.log(add("#", " "));

// // 46}

// // After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.
// // An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)
// // Given a string of what the overlapping claps sounded like, return how many claps were made in total.
// // Examples
// // countClaps("ClaClaClaClap!") ➞ 4
// // countClaps("ClClClaClaClaClap!") ➞ 6
// // countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9

// function countClaps(str) {
//     let sum = 0;
//     for (let i = 0; i < str.length; i++) {
//         const currentElement = str[i]
//         if (currentElement === "C") {
//             sum += 1
//         }
//     }
//     return sum

// }

// console.log(countClaps("ClaClaClaClap!"));
// console.log(countClaps("ClClClaClaClaClap!"));
// console.log(countClaps("CCClaClClap!Clap!ClClClap!"));


// // 47}

// function findIndex(arr, index) {
//     for (let i = 0; i < arr.length; i++) {
//         const currentelement = arr[i]
//         if (currentelement === index) {
//             return i
//         }
//     }
//     return -1
// }

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
// console.log(findIndex(["a", "g", "y", "d"], "d"));
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"]));



function arrBetween(num1, num2, arr) {
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num1 && arr[i] < num2) {
            main.push(arr[i])
        }
    }
    return main
}

console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));
console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
console.log(arrBetween(7, 32, [1, 2, 3, 78])); 

function calculator(num) {
    let sum = 0;
    let operator = "+";
    let currentNum = "";

    for (let i = 0; i < num.length; i++) {
        const char = num[i];

        if (char === "+" || char === "-" || char === "*" || char === "/") {
            sum = performOperation(sum, currentNum, operator);
            operator = char;
            currentNum = "";
        } else {
            currentNum += char;
        }
    }

    sum = performOperation(sum, currentNum, operator);

    return sum;
}

function performOperation(sum, num, operator) {
    const parsedNum = parseInt(num);

    switch (operator) {
        case "+":
            sum += parsedNum;
            break;
        case "-":
            sum -= parsedNum;
            break;
        case "*":
            sum *= parsedNum;
            break;
        case "/":
            sum /= parsedNum;
            break;
    }

    return sum;
}

console.log(calculator("23+4"));
console.log(calculator("45-15"));
console.log(calculator("13+2-5*2"));
console.log(calculator("49/7*2-3"));

// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11

function calculator(num) {
    let number = 0;
    let symbol = ""
    let arr = []
    let arr2 = []
    for(let i = 0 ; i < num.length ; i++ ){
      if( num[i] >= 0 || num[i]<= 0){
        arr2.push(num[i])
      }else{
        arr.push(num[i])
      }
    }
  
    return [arr2,arr]
  }
  
  console.log(calculator("23+4"));
  console.log(calculator("45-15"));
  console.log(calculator("13+2-5*2"));
  console.log(calculator("49/7*2-3"));

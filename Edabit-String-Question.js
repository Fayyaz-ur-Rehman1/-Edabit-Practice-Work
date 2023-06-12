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
    return `${str}`
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
    return str.length === str1.length
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
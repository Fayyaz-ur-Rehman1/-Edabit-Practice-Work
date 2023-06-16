// // 16}

// // Create a function that takes a word and returns the new word without including the first character.
// // Examples
// // newWord("apple") ➞ "pple"
// // newWord("cherry") ➞ "herry"
// // newWord("plum") ➞ "lum"

function newWord(str) {
    let main = ""
    for (let i = 1; i < str.length; i++) {
        main += str[i]
    }
    return main
}
console.log(newWord("apple"))
console.log(newWord("cherry"))
console.log(newWord("plum"))

// // 23}

// // Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.
// // Example:
// // ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// // Examples
// // toNumberArray(["9.4", "4.2"]) ➞ [9.4, 4.2]
// // toNumberArray(["91", "44"]) ➞ [91, 44]
// // toNumberArray(["9.5", "8.8"]) ➞ [9.5, 8.8]

function toNumberArray(arrstrnum) {
    let main = [];
    for (let i = 0; i < arrstrnum.length; i++) {
        main.push(arrstrnum[i] * 1)
    }
    return main
}

console.log(toNumberArray(["9.4", "4.2"]));
console.log(toNumberArray(["91", "44"]));
console.log(toNumberArray(["9.5", "8.8"]));


// // 24}

// // Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
// // Examples
// // frontThree("Python") ➞ "PytPytPyt"
// // frontThree("Cucumber") ➞ "CucCucCuc"
// // frontThree("bioshock") ➞ "biobiobio"

function frontThree(str) {
    let main = "";
    let stratend = str.slice(0, 3)
    for (let i = 0; i < 3; i++) {
        main += stratend

    }
    return main
}
console.log(frontThree("Python"));
console.log(frontThree("Cucumber"));
console.log(frontThree("bioshock"));

// // 25}

// // Create a function that takes a string txt and a number n and returns the repeated string n number of times.
// // If given argument txt is not a string, return Not A String !!
// // Examples
// // repeatString("Mubashir", 2) ➞ "MubashirMubashir"
// // repeatString("Matt", 3) ➞ "MattMattMatt"
// // repeatString(1990, 7) ➞ "Not A String !!"

function repeatString(str, num) {
    if (typeof str === 'number') return "Not A String !!";
    for (let i = 1; i < num; i++) {
        str += str
    }
    return str
}

console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));
console.log(repeatString(1990, 7));


// // 41}

// // Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
// // Examples
// // longBurp(3) ➞ "Burrrp"
// // longBurp(5) ➞ "Burrrrrp"
// // longBurp(9) ➞ "Burrrrrrrrrp"

function longBurp(count) {
    let str = 'Bu';
    for (let i = 0; i < count; i++) {
        str += 'r';
    }
    return str + 'p'
}
console.log(longBurp(3));
console.log(longBurp(5));
console.log(longBurp(9));


// // 44}

// // Create a function which makes the last character of a string repeat n number of times.
// // Examples
// // modifyLast("Hello", 3) ➞ "Hellooo"
// // modifyLast("hey", 6) ➞ "heyyyyyy"
// // modifyLast("excuse me what?", 5) ➞ "excuse me what?????"

function modifyLast(str, num) {
    let main = "";
    for (let i = 0; i < str.length - 1; i++) {
        main += str[i]
    }
    main += str[str.length - 1].repeat(num)
    return main
}

console.log(modifyLast("Hello", 3));
console.log(modifyLast("hey", 6));
console.log(modifyLast("excuse me what?", 5));


// // 46}

// // After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.
// // An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)
// // Given a string of what the overlapping claps sounded like, return how many claps were made in total.
// // Examples
// // countClaps("ClaClaClaClap!") ➞ 4
// // countClaps("ClClClaClaClaClap!") ➞ 6
// // countClaps("CCClaClClap!Clap!ClClClap!") ➞ 9

function countClaps(str) {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const currentElement = str[i]
        if (currentElement === "C") {
            sum += 1
        }
    }
    return sum

}

// console.log(countClaps("ClaClaClaClap!"));
// console.log(countClaps("ClClClaClaClaClap!"));
// console.log(countClaps("CCClaClClap!Clap!ClClClap!")); 



// 49}
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// Examples
// getCase("whisper...") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"
// getCase("Indoor Voice") ➞ "mixed"

function getCase(str) {
    for (let i = 0; i < str.length; i++) {
        str[i]
        if (str[i] === "w") {
            return "lower";
        } else if (str[i] === "S") {
            return "upper";
        } else {
            return "mixed"
        }
    }
}
console.log(getCase("whisper..."));
console.log(getCase("SHOUT!"));
console.log(getCase("Indoor Voice"));

// 50}

// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.
// Examples
// isBoiling("212F") ➞ true
// isBoiling("100C") ➞ true
// isBoiling("0F") ➞ false

function isBoiling(str) {
    for (let i = 0; i < str.length; i++) {
        str[i]
        if (str[i] === "0") {
            return false
        } else {
            return true
        }
    }
}
console.log(isBoiling("212F"));
console.log(isBoiling("100C"));
console.log(isBoiling("0F"));


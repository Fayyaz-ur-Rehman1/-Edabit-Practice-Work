// // 17}

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


// 22}

// Create a function that returns true if a string contains any spaces.
// Examples
// hasSpaces("hello") ➞ false
// hasSpaces("hello, world") ➞ true
// hasSpaces(" ") ➞ true
// hasSpaces("") ➞ false
// hasSpaces(",./!@#") ➞ false

function hasSpaces(str) {
    for (let i = 0; i <= str.length; i++) {
        let currentElement = str[i];
        if (currentElement === " ") {
            return true
        }
    }
    return false
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
    for (let i = 0; i < str.length; i++) {
        let currentElement = str[i];
        if (currentElement[currentElement.length - 1] === "n") {
            return true
        }
    }
    return false
}
console.log(isLastCharacterN("Aiden"));
console.log(isLastCharacterN("Piet"));
console.log(isLastCharacterN("Bert"));
console.log(isLastCharacterN("Dean"));


// // 24}

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


// // 25}

// // Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.
// // Examples
// // frontThree("Python") ➞ "PytPytPyt"
// // frontThree("Cucumber") ➞ "CucCucCuc"
// // frontThree("bioshock") ➞ "biobiobio"

function frontThree(str) {
    let main = "";
    // let stratend = str.slice(0, 3)
    for (let i = 0; i < 3; i++) {
        main += str.substring(0, 3)
    }
    return main
}
console.log(frontThree("Python"));
console.log(frontThree("Cucumber"));
console.log(frontThree("bioshock"));

// // 26}

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

function repeatString(str, num) {
    let main = ""
    for (let i = 1; i < num; i++) {
        main = str += str
        if (typeof main === 'number') return "Not A String !!";
    }
    return main
}

console.log(repeatString("Mubashir", 2));
console.log(repeatString("Matt", 3));
console.log(repeatString(1990, 7));


// 31}

// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
// Examples
// stutter("incredible") ➞ "in... in... incredible?"
// stutter("enthusiastic") ➞ "en... en... enthusiastic?"
// stutter("outstanding") ➞ "ou... ou... outstanding?"


function stutter(str) {
    let main = ""
    for (let i = 0; i < 2; i++) {
        main += str[i]
    }
    return main + "..." + main + "..." + str + "?"
}

console.log(stutter("incredible"));
console.log(stutter("enthusiastic"));
console.log(stutter("outstanding"));

// 34}

// reate a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// Examples
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday("sad") ➞ "Today, I am feeling sad"
// moodToday() ➞ "Today, I am feeling neutral"

function moodToday(str) {
    let main = "";
    let add = "Today I am felling ";

    if (str === undefined) {
        return add + " natural"
    }
    for (let i = 0; i < str.length; i++) {
        main += str[i]
    }
    return add + main
}

console.log(moodToday("happy"));
console.log(moodToday("sad"));
console.log(moodToday());


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


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


// // 42}

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


// 43}

// Create a function that takes a string and returns a string with spaces in between all of the characters.
// Examples
// spaceMeOut("space") ➞ "s p a c e"
// spaceMeOut("far out") ➞ "f a r   o u t"
// spaceMeOut("elongated musk") ➞ "e l o n g a t e d   m u s k"

function spaceMeOut(str) {
    let main = ""
    for (let i = 0; i < str.length; i++) {
        main += str[i] + " "
    }
    return main
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
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'D' || str[i] === 'd') {
            count = count + 1
        }
    }
    return count
}
console.log(countDs("My friend Dylan got distracted in school."));
console.log(countDs("Debris was scattered all over the yard."));
console.log(countDs("The rodents hibernated in their den."));

// // 45}

// // Create a function which makes the last character of a string repeat n number of times.
// // Examples
// // modifyLast("Hello", 3) ➞ "Hellooo"
// // modifyLast("hey", 6) ➞ "heyyyyyy"
// // modifyLast("excuse me what?", 5) ➞ "excuse me what?????"

function modifyLast(str, num) {
    let main = "";
    let lastlen = str[str.length - 1]
    main += str
    for (let i = 0; i < num; i++) {
        main += lastlen
    }

    return main
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
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            newStr += char;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(add("R", "javascript is fun"));
console.log(add("#", "hello world!"));
console.log(add("#", " "));

// // 47}

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
            sum = sum + 1
        }
    }
    return sum

}

console.log(countClaps("ClaClaClaClap!"));
console.log(countClaps("ClClClaClaClaClap!"));
console.log(countClaps("CCClaClClap!Clap!ClClClap!"));

// 48}

function findIndex(arr, index) {
    for (let i = 0; i < arr.length; i++) {
        const currentelement = arr[i]
        if (currentelement === index) {
            return i
        }
    }
    return -1
}

console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
console.log(findIndex(["a", "g", "y", "d"], "d"));
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"]));

// 50}
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

// 51}

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

// 52}

function toScottishScreaming(str) {
    let vowel = ["A", "E", "I", "O", "U"];
    let main = "";

    for (let i = 0; i < str.length; i++) {
        const currentElement = str[i];
        const captialLatter = currentElement.toUpperCase();

        if (vowel.includes(captialLatter)) {
            main += "E";
        } else {
            main += captialLatter
        }
    }
    return main
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
    let main = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "M" || str[i] === "m") {
            main += "W"
        } else {
            main += str[i]
        }
    }
    return main
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
    let [tagName, count] = str.split("*");
    let result = "";
    for (let i = 0; i < count; i++) {
        result += `<${tagName}></${tagName}>`;
    }
    return result
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
    let main = [];
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (typeof currentElement === 'number') {
            main.push(currentElement)
        }
    }
    return main
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
    let main = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '1') {
            main.push(true)
        } else if (str[i] === '0') {
            main.push(false)
        }
        else {
            main.push(str[i])
        }
    }
    return main
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
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(word)) {
            return false;
        }
    }
    return true;
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
    let arr = []
    let main = "";
    for (let i = 0; i < str.length; i++) {
        if (!parseInt(str[i])) {
            arr.push(str[i])
        }
    }
    return main + arr.join("")

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
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(word)) {
            sum = sum + 1
        }
    }
    return sum
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

function calculate(num1, num2, str) {
    let arthametic = ["+", "-", "*", "/", "%"]
    let main = 0;
    for (let i = 0; i < arthametic.length; i++) {
        if (arthametic[i] === str) {
            switch (str) {
                case "+":
                    main = num1 + num2
                    break
                case "-":
                    main = num1 - num2
                    break
                case "*":
                    main = num1 * num2
                    break
                case "/":
                    main = num1 / num2
                    break
                case "%":
                    main = num1 % num2
                    break;

            }
            break
        }
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
    let main = [];
    let numb = num1

    for (let i = 0; i < num3; i++) {
        main.push(numb)
        numb += num2;
    }
    return main.join(", ")
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
    let arr = ['4', '5', '0', '1']
    let main = "";
    for (let i = 0; i < str.length; i++) {
        if (arr[0].includes(str[i])) {
            main += "A"
        } else if (arr[1].includes(str[i])) {
            main += "S"
        } else if (arr[2].includes(str[i])) {
            main += "O"
        } else if (arr[3].includes(str[i])) {
            main += "I"
        }
        else {
            main += str[i]
        }
    }
    return main
}
console.log(keyboardMistakes("MUB45H1R"));
console.log(keyboardMistakes("DUBL1N"));
console.log(keyboardMistakes("51NG4P0RE"));




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
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    return [even, odd]
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
    var pairs = [];

    for (var i = 0; i < str.length; i += 2) {
        pairs.push(str.substr(i, 2) || str[i] + "*");
    }

    return pairs;
}

console.log(stringPairs("mubashir"));
console.log(stringPairs("edabit"));
console.log(stringPairs("airforces"));

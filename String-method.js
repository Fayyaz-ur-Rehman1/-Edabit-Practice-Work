////////////////////////////////////String////////////////////////////////////

let lenstr = "hello guys how are u";
let lenstrans = lenstr.length
console.log(lenstrans);

let lowercasestr = "MY NAME IS FAYYAZURREHMAN I AM STUDY IN CLASS 11TH";
let lowercasestrans = lowercasestr.toLocaleLowerCase();
console.log(lowercasestrans);

let uppercasestr = "my name is fayyaz urrehman";
let uppercasestrans = uppercasestr.toLocaleUpperCase()
console.log(uppercasestrans);

let includestr = "my name is fayyazurrehman"
let includestrans = includestr.includes("n");
console.log(includestrans);

let startwithstr = "hello people";
let startwithstrans = startwithstr.startsWith("h");
console.log(startwithstrans);

let endwithstr = "hello people";
let endwithstrans = endwithstr.endsWith("e");
console.log(endwithstrans);

let indexOfstr = "this is indexof";
let indexOfstrans = indexOfstr.indexOf("n");
console.log(indexOfstrans);

let lastIndexOfstr = "last this is lastindexof";
let lastIndexOfstrans = lastIndexOfstr.lastIndexOf("t");
console.log(lastIndexOfstrans);

let concatstr = "my name is ";
let concatstr1 = "concat methods";
let concatstrans = concatstr.concat(concatstr1);
console.log(concatstrans);

let searchstr = "my name is search mehod";
let searchstrans = searchstr.search("search");
console.log(searchstrans);

let matchstr = "my name is match methods ";
// let matchstrans = matchstr.match(/m/g);
let matchstrans = matchstr.match("s");
console.log(matchstrans);

let replacestr = "my name is rep";
let replacestrans = replacestr.replace("rep", "Replace");
console.log(replacestrans);

let trimstr = "                  Trim is my name               ";
let trimstrans = trimstr.trim();
console.log(trimstrans);

let charstr = "my name is fayyaz urrehman";
let chatstrans = charstr.charAt(6)
console.log(chatstrans);

let chatcodestr = "i am fayyazurrehman";
let charcodestrans = chatcodestr.charCodeAt(2)
console.log(charcodestrans);

let formCharcodestrans = String.fromCharCode(97)
console.log(formCharcodestrans);


let atstr = "hy people my name is fayyazurrehman";
let atstrans = atstr.at(10)
console.log(atstrans);

let trimsartstr = "                               trim strat is my name                 "
let trimsartstrans = trimsartstr.trimStart();
console.log(trimsartstrans);


let trimendstr = "                               trim strat is my name                 "
let trimendstrans = trimendstr.trimEnd();
console.log(trimendstrans);

let splitstr = "my name is split methods";
let splitstrans = splitstr.split(' ');
console.log(splitstrans);

let repeatstr = "my name is repeat function";
let repeatstrans = repeatstr.repeat(6);
console.log(repeatstrans);

let slicestr = "my name is slice methods";
let slicestrans = slicestr.slice(4, 12);
console.log(slicestrans);

let Substr = "my name is substring methods";
let Substrans = Substr.substr(3, 10);
console.log(Substrans);

let Substringstr = "my name is substring methods";
let Substringans = Substringstr.substring(4, 12);
console.log(Substringans);

let str = ["fayyaz", "adnan", "arbaz"];
let strans = str.toString()
console.log(strans);

let valueofstr = "fayyazurrehman";
let valueofstrans = valueofstr.valueOf()
console.log(valueofstrans);


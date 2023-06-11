let arr = [1, 2, 3, 4, 5, 6];
let at = arr.at(3);
console.log(at); // you give index number and at method  give element 


let arr2 = ["fayyaz", "danish", "adnan", "uzair"];
let arr3 = ["ayyaz", "Hamza"];
let concat = arr2.concat(arr3);
console.log(concat); // concat method is invoke multiple array and return one array


let arr4 = ['a', 'b', 'c', 'd', 'e'];
let copyWithIn = arr4.copyWithin(1, 3, 4);
console.log(copyWithIn);

let arr5 = ['a', 'b', 'c'];
let entries = arr5.entries();
console.log(entries.next().value);
console.log(entries.next().value);
console.log(entries.next().value);

let arr6 = [1, 2, 3, 4, 5, 6];
let arr7 = arr6.every(function (a) {
   return a < 10
})
console.log(arr7);

let arr8 = [3, 34, 5, 6, 7, 9];
let arr9 = arr8.fill("fayyazkhilji", 1, 3);
console.log(arr9);

let arr10 = [10, 24, 35, 67, 46];
let arr11 = arr10.filter(function (filter) {
   return filter < 99
})
console.log(arr11);

let arr12 = ['eee', 'ffff', 'dds', 'dff', 'sjfkjf', 'asfsdffd'];
let arr13 = arr12.filter(word => word.length > 5)
console.log(arr13);

let arr14 = [2, 3, 5, 7, 8, 9, 6, 4];
let arr15 = arr14.find(find => find > 4)
console.log(arr15);

let arr16 = [2, 3, 5, 6, 78, 96, 4, 3, 2];
let arr17 = arr16.findIndex(elm => elm > 48)
console.log(arr17);

let arr18 = [6, 7, 78, 8, 8, 82, 9, 89, 8, 9]
let arr19 = arr18.findLast(elment => elment > 38)
console.log(arr19);

let arr20 = [3, 4, 65, 7, 78, 8, 8];
let arr21 = arr20.findLastIndex(elm => elm > 76)
console.log(arr21);

let arr22 = [45, 6, 76.68, 878, 8787, 6];
let arr23 = arr22.forEach(elm => console.log(elm));

let a = [1, 2, 3, 5];
// let b = a.includes(2);
let c = a.includes(8)
// console.log(b);
console.log(c);

let d = ['fayyaz', 'danish', 'adnan', 'shaif'];
console.log(d.join("|"));

let e = ['fayyaz', 'danish', 'adanan', 'shaif'];
let f = e.indexOf("adanan")
console.log(f);

let g = ['hello', 'hy', 'by', 'hi'];
let h = g.pop();
console.log(h);

let i = ['fayyaz', 'danish', 'adnan', 'shaif'];
let j = i.reverse()
console.log(j);

let k = ['fayyaz', 'danish', 'adnan', 'shaif'];
k.values();
console.log(k);

let l = ['fayyaz', 'danish', 'adnan', 'shaif'];
let m = l.shift()
console.log(m);

let n = ['fayyaz', 'danish', 'adnan', 'shaif', 'ayyaz'];
let o = n.slice(2, 4)
console.log(o);

let p = ['fayyaz', 'danish', 'adnan', 'shaif', 'ayyaz'];
let q = p.splice(2, 1, 4)
console.log(q);

let u = ['fayyaz', 'danish', 'adnan', 'shaif', 'ayyaz'];
let v = u.toLocaleString()
console.log(v);

let w = ['fayyaz', 'ayyaz', 'aijaj', 'hamaza', 'uzaifa'];
w.pop();
console.log(w);


///////////////////////////// all Call back function//////////////////////////////



// forEach////////
// any elemnet  present in Array and you use forEach method then call back function 
// run any element . and array element give order and run callback function in array element
// forech fuction send callback function in array any value



const array8 = ['fayyaz', 'danish', 'sahle', 'muajhid'];
let foreach = arr.forEach(function (elm) {
   console.log(elm);
})

const array2 = ['fayyaz', 'danish', 'sahle', 'muajhid'];

let forec = arr2.forEach(function (elm, index) {
   console.log(index + " " + elm);
})

const array5 = ['fayyaz', 'danish', 'sahle', 'muajhid'];
let foreach3 = arr3.forEach(function (elm, index, arr) {
   console.log(elm + " " + index + " " + arr);
})

const array9 = ['fayyaz', 'danish', 'sahle', 'muajhid'];
let foreach4 = arr4.forEach(function (eml, index, arr) {
   console.log(arr[2]);
})

const array0 = [1, 2, 3, 4, 5, 6, 7, 8]
let foreach5 = arr5.forEach(function (elm, index, arr) {
   console.log(arr[index] + 100);
})


const array10 = [1, 2, 3, 4, 5, 6, 7, 8]
let foreach6 = arr5.forEach(function (elm, index, arr) {
   console.log(arr[elm, index] + 100);
})




// Reduce/////  
//  The reduce () method executes a reducer function function that you provide
// on each element of the array , resulating in single output value



let array = [3, 4, 5, 6, 7, 4, 5];
let reduce = array.reduce(function (accumlater, currentelm) {
   return accumlater + currentelm
})
console.log(reduce);

let arra1 = [3, 4, 5, 5];
let reduce3 = arra1.reduce(function (accu, current) {
   accu.sum += current
   accu.product *= current
   return accu
}, { sum: 0, product: 1 })
console.log(reduce3);



let array1 = [3, 4, 5, 5];
let reduce2 = array1.reduce(function (accu, current) {
   accu.push(current + 2)
   return accu
}, [])
console.log(reduce2);


// Map ///////
//  is transform any element in the array and return new array




let map1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mapans = map1.map(function (currentvalue) {
   return currentvalue * 2
})
console.log(mapans);

let mapelm = ['fayyaz', 'adnan', 'danish', 'arbaz'];
let elmans = mapelm.map(function (current) {
   return 'my name is ' + " " + current
})
console.log(elmans);


let map2 = ['fayyaz', 'khilji', 'chouhan', 'katai'];
let elmmap = map2.map(function (current, index) {
   return index + ":" + current
})
console.log(elmmap);


let map3 = ['fayyaz', 'khilji', 'chouhan', 'katai'];
let elmmap2 = map3.map(function (current, index, arr) {
   console.log(arr);
})




// filter ///////
//  is all value filter in array



let z = [1, 2, 3, 5, 6, 8, 9, 6];
let filterarr = z.filter((val) => {
   return val > 5
})
console.log(filterarr);

let y = [3, 4, 5, 6, 7, 2, 0, 8, 4]
let filterarr1 = y.filter(function (val) {
   return val < 5
})
console.log(filterarr1)

let u1 = ['fayyaz', 'adanan', 'ayyaz', 'fayyaz', 'arbaz', 'fayyaz']
let filterarr2 = u1.filter(function (val) {
   return val === "fayyaz"
})
console.log(filterarr2);




// some ///////
// any value are match in array one value are true and 
// all value are false but one value are true then some method is give true



let age = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let som = age.some(function (val) {
   return val < 45
})
console.log(som);

let age1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let som1 = age1.some(function (val) {
   return val > 30
})
console.log(som1);


let age2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let som2 = age2.some(function (val) {
   return val > 91
})
console.log(som2);



// every//////
//  all value are true then every method return true all value are true 
// but one value are false then return false



let pre = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let every = pre.every(function (val) {
   return val > 0
})
console.log(every);

let pre1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let every1 = pre1.every(function (val) {
   return val < 100
})
console.log(every1);

let pre3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let every3 = pre3.every(function (val) {
   return val > 50
})
console.log(every3);


//  find //////// 
// find  is give first result 



let findarr = [10, 20, 30, 40, 58, 70];
let finans = findarr.find(function (val) {
   return val < 50
})
console.log(finans);


let findarr1 = [10, 20, 30, 40, 58, 70];
let finans1 = findarr1.find(function (val) {
   return val > 50
})
console.log(finans1);



//  findIndex ////////
// findIndex is give first index acording what value find findexindex return index



let findindexarr = [10, 20, 30, 40, 58, 70];
let findindexans = findindexarr.findIndex(function (val) {
   return val > 67
})
console.log(findindexans);

let findindexarr1 = [10, 20, 30, 40, 58, 70];
let findindexans1 = findindexarr1.findIndex(function (val) {
   return val < 67
})
console.log(findindexans1);


// sort ///////
// is array all element seqvench alfabetli 

let sor = ['b', 'a', 'c', 'f', 'd', 'g'];
let sorans = sor.sort();
console.log(sorans);

let sor1 = [3, 4, 2, 1, 5, 9, 8, 7, 6];
let sorans1 = sor1.sort()
console.log(sorans1);

let sor2 = [3, 5, 3, 1, 10, 2, 6, 4, 75];
let sorans2 = sor2.sort(function (a, b) {
   return a - b
});
console.log(sorans2);
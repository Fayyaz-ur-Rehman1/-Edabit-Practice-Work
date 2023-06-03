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

let u = ['fayyaz','danish','adnan','shaif','ayyaz'];
let v = u.toLocaleString()
console.log(v);
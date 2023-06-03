// //  Event  

let mousedown = document.getElementById('btn');
mousedown.addEventListener('mousedown', function (event) {
    console.log('this is mousedown');
    console.log(event.type);
})

let mouseup = document.getElementById("btn1");
mouseup.addEventListener('mouseup', function (event) {
    console.log('this is mouseup')
    console.log(event.type);
})

let keyup = document.getElementById("btn2");
keyup.addEventListener('keyup', function (event) {
    console.log(event.key);
    console.log(event.type);
})

let keydown = document.getElementById("btn3");
keydown.addEventListener('keydown', function (event) {
    console.log(event.key);
    console.log(event.type);
})

let keypress = document.getElementById("btn4");
keypress.addEventListener('keypress', function (event) {
    console.log(event.key);
    console.log(event.type);
})

let click = document.createElement("button");
click.textContent = "i am click "
click.classList.add("btn5")
document.body.appendChild(click)
click.addEventListener('click', function (event) {
    console.log("i am click ");
    console.log(event.type);
})

let mousemove = document.createElement("button");
mousemove.classList.add("btn6")
mousemove.textContent = "i am mousemove";
document.body.appendChild(mousemove)
mousemove.addEventListener("mousemove", function (event) {
    console.log('i am mousemove');
    console.log(event.type);
})

let mouseover = document.createElement("button");
mouseover.classList.add("btn7");
mouseover.textContent = "i am mouseover";
document.body.appendChild(mouseover);
mouseover.addEventListener('mouseover', function (event) {
    console.log("i am mouseover");
    console.log(event.type);
})

let mouseout = document.createElement("button");
mouseout.classList.add("btn8");
mouseout.textContent = "i am mouseout";
document.body.appendChild(mouseout);
mouseout.addEventListener('mouseout', function (event) {
    console.log("this is mouseout");
    console.log(event.type);
})

let contextmenu = document.createElement("button");
contextmenu.classList.add("btn9");
contextmenu.textContent = "i am contextmenu";
document.body.appendChild(contextmenu);
contextmenu.addEventListener('contextmenu', function (event) {
    console.log("this is comtextmenu");
    console.log(event.type);
})

let dblclick = document.createElement("button");
dblclick.classList.add("btn10");
dblclick.textContent = "i am dblclick";
document.body.appendChild(dblclick);
dblclick.addEventListener('dblclick', function (event) {
    console.log("this is dblclick");
    console.log(event.type);
})

let multipleadd = document.getElementById("btn11");

multipleadd.addEventListener("click", function () {
    document.write("this is click")
})

multipleadd.addEventListener("mouseout", function () {
    console.log('this is mouse out');
})

multipleadd.addEventListener('mouseleave', function () {
    console.log('this is mouseleave');
})

let removeadd = document.getElementById("btn12");

function clickfn() {
    console.log("this is click");
}

function mouseoverfn() {
    console.log("this is mouseover");
}

removeadd.addEventListener("click", clickfn)
removeadd.addEventListener('mouseover', mouseoverfn)

removeadd.removeEventListener('mouseover', mouseoverfn);


// Select Id , Class , QuerySelect ,QuerySelectAll 

let cl1 = document.getElementsByClassName("cl");

for (let i = 0; i < cl.length; i++) {
    cl1[i].innerHTML = "Hello i am fayyazurrehman"
    console.log(cl1[i]);
}

let selector = document.querySelectorAll(".qurey")
console.log(selector);

for (let u = 0; u < selector.length; u++) {
    selector[u].innerHTML = "<h1>Fayyazurrehman is a good boy</h1>"
}

let queryS = document.querySelector(".first");
console.log(queryS);
queryS.innerHTML = "this is a boy"

let querySall = document.querySelectorAll(".first");
console.log(querySall);

for (let i = 0; i < querySall.length; i++) {
    querySall[i].innerHTML = "<h1>My name is fayyazurrehman </h1>"
}

let tag = document.getElementsByTagName("h3");
console.log(tag);

for (let i = 0; i < tag.length; i++) {
    tag[i].innerHTML = "<h5>Asslamualikum<h5>"
}


let cl = document.getElementById("box");
cl.classList.add("color");
cl.classList.remove("dim")
cl.classList.toggle("dim")
cl.className = "color dim"
cl.classList.replace("dim", "fayyaz")
let result = cl.classList.contains("color")
console.log(result);

for (css of box.classList) {
    console.log(css);
}

// Delegation Event


let bubbling1 = document.querySelector(".child");
bubbling1.addEventListener('click', function () {
    console.log("child Click");
}, false)

let bubbling2 = document.querySelector(".parent")
bubbling2.addEventListener("click", function () {
    console.log("parent Click");
}, false)

let bubbling3 = document.querySelector(".grandparent");
bubbling3.addEventListener("click", function () {
    console.log("grandprent Click");
}, false)


let capturing1 = document.querySelector(".child");
capturing1.addEventListener("click", function () {
    console.log("child click");
}, true);

let capturing2 = document.querySelector(".parent");
capturing2.addEventListener("click", function () {
    console.log("parent click");
}, true);

let capturing3 = document.addEventListener("click", function () {
    console.log("grandparent click");
}, true)

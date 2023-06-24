for (let i = 1; i <= 5; i++) {
    for (let u = 1; u < i; u++) {
        document.write(u)
    }
    document.write(i + "<br>")
}

document.write("<hr>")
document.write("<hr>")

for (let i = 0; i <= 10; i++) {
    for (let u = 0; u < i; u++) {
        document.write("*")
    }
    document.write("*" + "<br>")
}


function fn(str) {
    return str * 1
}

console.log(fn("32"));

for (let i = 1; i <= 1000; i++) {
    document.write(i * 10 + "<br>");
}
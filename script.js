function cler() {
    document.getElementById("number").value = ""
}
function disp(valu) {
    if (valu === 'left') {
        document.getElementById("number").value += ')'
    }
    else if (valu === 'right') {
        document.getElementById("number").value += '('
    }
    else {

        document.getElementById("number").value += valu
    }
}
function solve(sym) {
    let x1 = document.getElementById("number").value;
    console.log(typeof temp);
    if (sym === 'rec') {
        x = document.getElementById("number").value
        y = 1 / x
        document.getElementById("number").value = y
    }

    else if (sym === 'square_root') {


        x = document.getElementById("number").value
        y = Math.sqrt(x)
        document.getElementById("number").value = y
    }
    else if (sym === 'cube_root') {


        x = document.getElementById("number").value
        y = Math.cbrt(x)
        document.getElementById("number").value = y
    }
    else if (sym === 'square') {


        x = document.getElementById("number").value
        y = x * x
        document.getElementById("number").value = y
    }
    else if (sym === 'cube') {


        x = document.getElementById("number").value
        y = x * x * x
        document.getElementById("number").value = y
    }
    else if (x1.indexOf("^") > 0) {
        let str = x1.split("^")
        let res = Math.pow(Number(str[0]), Number(str[1]))
        document.getElementById("number").value = res;
    }
    else if (sym === 'expofx') {


        x = document.getElementById("number").value
        y = Math.pow(Math.E, x)
        document.getElementById("number").value = y
    }
    else if (sym === 'expofx') {


        x = document.getElementById("number").value
        y = Math.pow(Math.E, x)
        document.getElementById("number").value = y
    }
    else if (x1.indexOf("mod") > 0) {
        let str = x1.split("mod")
        let res = Number(str[0]) % Number(str[1])
        document.getElementById("number").value = res;
    }
    else if (x1.indexOf("%") > 0) {


        x = x1.split("%")
        y = (x[0] * x[1]) / 100
        document.getElementById("number").value = y
    }
    else if (x1.indexOf("logxbasey") > 0) {
        let str = x1.split("logxbasey")
        let res = Math.log10(str[0]) / Math.log10(str[1])
        document.getElementById("number").value = res
    }
    else {
        var a = document.getElementById("number").value
        var b = eval(a)
        document.getElementById("number").value = b
    }


}
function logarithm(num) {
    let x = document.getElementById("number").value;
    if (num === '10') {
        let y = Math.log10(x);
        document.getElementById("number").value = y;

    }
    else if (num === '2') {
        let y = Math.log2(x);
        document.getElementById("number").value = y;

    }
    else if (num === 'pxy') {
        disp('logxbasey')
    }

    else if (num === 'ln') {
        let y = Math.log(x);
        document.getElementById("number").value = y;

    }
}
function factorial() {
    let x = document.getElementById("number").value;
    let fact = 1;
    for (let i = 1; i <= x; i++) {
        fact = fact * i;

    }
    document.getElementById("number").value = fact;
}
function pow10() {
    let x = document.getElementById("number").value;
    let y = Math.pow(10, x);
    document.getElementById("number").value = y;
}
function exponent() {
    let x = document.getElementById("number").value;
    if (x === '') {
        let y = Math.E;
        document.getElementById("number").value = y;
    }
    else {
        disp('e');
    }
}
function sine() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.sin(x * Math.PI / 180);
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.sin(x);
        document.getElementById("number").value = y;
    }
}
function cosine() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.cos(x * Math.PI / 180);
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.cos(x);
        document.getElementById("number").value = y;
    }
}
function tangent() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.tan(x * Math.PI / 180);
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.tan(x);
        document.getElementById("number").value = y;
    }
}
function sininv() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.asin(x);
        y = y * 180 / Math.PI;
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.asin(x)
        document.getElementById("number").value = y;
    }
}
function cosinv() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.acos(x);
        y = y * 180 / Math.PI;
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.acos(x)
        document.getElementById("number").value = y;
    }
}
function taninv() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.atan(x);
        y = y * 180 / Math.PI;
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.atan(x)
        document.getElementById("number").value = y;
    }
}
function sinhyperbola() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.sinh(x);
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.sinh(x)
        document.getElementById("number").value = y;
    }
}
function coshyperbola() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.cosh(x);
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.cosh(x)
        document.getElementById("number").value = y;
    }
}
function tanhyperbola() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.tanh(x);

        document.getElementById("number").value = y;
    }
    else {

        let y = Math.tanh(x)
        document.getElementById("number").value = y;
    }
}
function sininvhyperbola() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.asinh(x);
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.asinh(x);
        document.getElementById("number").value = y;
    }
}
function cosinvhyperbola() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.acosh(x);
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.acosh(x)
        document.getElementById("number").value = y;
    }
}
function taninvhyperbola() {
    let x = document.getElementById("number").value;
    if (document.getElementById('html').checked) {
        let y = Math.atanh(x);
        document.getElementById("number").value = y;
    }
    else {

        let y = Math.atanh(x)
        document.getElementById("number").value = y;
    }
}
function pie() {
    let a = Math.PI
    document.getElementById("number").value = a

}
function sign() {
    let x = document.getElementById("number").value
    if (Number(x) > 0) {
        document.getElementById("number").value = -x
    }
    else {
        document.getElementById("number").value = -x
    }
}
function modulus() {
   let x=document.getElementById("number").value;
   if (Number(x)<0) {
         let y=-x;
         document.getElementById("number").value=y;       
   }   
}
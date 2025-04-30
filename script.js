
function number1() {
    document.getElementById("display").value = display.value +=1;
}

function number2() {
    document.getElementById("display").value = display.value +=2;
}

function number3() {
    document.getElementById("display").value = display.value +=3;
}

function number4() {
    document.getElementById("display").value = display.value +=4;
}

function number5() {
    document.getElementById("display").value = display.value +=5;
}

function number6() {
    document.getElementById("display").value = display.value +=6;
}

function number7() {
    document.getElementById("display").value = display.value +=7;
}

function number8() {
    document.getElementById("display").value = display.value +=8;
}

function number9() {
    document.getElementById("display").value = display.value +=9;
}

function Ac() {
    document.getElementById("display").value = display.value ="";
}

function plus() {
    document.getElementById("display").value = display.value +=("+");
}

function sub() {
    document.getElementById("display").value = display.value +=("-");
}

function multi() {
    document.getElementById("display").value = display.value +=("*");
}

function div() {
    document.getElementById("display").value = display.value +=("/");
}

function equal() {
    document.getElementById("display").value ="Ans"+ eval(display.value);
}

function delet() {
    document.getElementById("display").value = display.value.slice (0,-1);
}


function zero() {
    document.getElementById("display").value = display.value +=("0");
}

function dot() {
    document.getElementById("display").value = display.value +=(".");
}

function openb() {
    document.getElementById("display").value = display.value +=("(");
}

function closec() {
    document.getElementById("display").value = display.value +=(")");
}

function sqrt() {
    document.getElementById("display").value = Math.sqrt(display.value);
}

function pow() {
    document.getElementById("display").value = Math.pow(display.value,2);
}


function cos0() {
    document.getElementById("display").value = Math.cos(display.value);
}

function sin0() {
    document.getElementById("display").value = Math.sin(display.value);
}

function tan0() {
    document.getElementById("display").value = Math.tan(display.value);
}


function pie() {
    document.getElementById("display").value = 3.141592653589;
}

function justify() {
    document.getElementById("display").value = Math.log(display.value);
}

function random() {
    document.getElementById("display").value = Math.random(display.value);
}

function expon() {
    document.getElementById("display").value = Math.exp(display.value);
}

function percentage() {
    document.getElementById("display").value = display.value / 100;
}
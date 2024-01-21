let display = document.getElementById("display");

function addToDisplay(x) {
    display.value += x;
}

document.getElementById("clear").onclick = function() {
    display.value = "";
}

document.getElementById("backspace").onclick = function() {
    display.value = display.value.substr(0, display.value.length - 1);
}

document.getElementById("equal").onclick = function() {
    display.value = eval(display.value);
}
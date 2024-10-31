var input = document.getElementById("input");
function calc(value){
    input.value += value;
}

function Result(){
    var ans = eval(input.value)
    input.value = ans;
}

function allClear(){
    input.value = "";
}

function removeLastDigit(){
    input.value = input.value.slice(0,-1);
}
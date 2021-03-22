var exp = document.getElementById("exp");
var ans = document.getElementById("ans");

// var seven = document.getElementById("7");
// var eight = document.getElementById("8");
// var nine = document.getElementById("9");
// var four = document.getElementById("4");
// var five = document.getElementById("5");
// var six = document.getElementById("6");
// var one = document.getElementById("1");
// var two = document.getElementById("2");
// var three = document.getElementById("3");
// var dot = document.getElementById("dot");
// var zero = document.getElementById("0");
// var equal = document.getElementById("equal");
// var ob = document.getElementById("ob");
// var back = document.getElementById("back_");
// var clear = document.getElementById("clear_");
// var cb = document.getElementById("cb");
// var add = document.getElementById("add");
// var sub = document.getElementById("sub");
// var mul = document.getElementById("mul");
// var div = document.getElementById("div");

// seven.addEventListener("click", onClick('7'));
// eight.addEventListener("click", onClick('8'));
// nine.addEventListener("click", onClick('9'));
// div.addEventListener("click", onClick('/'));
// four.addEventListener("click", onClick('4'));
// five.addEventListener("click", onClick('5'));
// six.addEventListener("click", onClick('6'));
// mul.addEventListener("click", onClick('*'));
// one.addEventListener("click", onClick('1'));
// two.addEventListener("click", onClick('2'));
// three.addEventListener("click", onClick('3'));
// sub.addEventListener("click", onClick('-'));
// dot.addEventListener("click", onClick('.'));
// zero.addEventListener("click", onClick('0'));
// equal.addEventListener("click", onClick('='));
// add.addEventListener("click", onClick('+'));
// ob.addEventListener("click", onClick('('));
// cb.addEventListener("click", onClick(')'));
// back.addEventListener("click", onClick('b'));
// clear.addEventListener("click", onClick('c'));

function onClick(char) {
    if(char == '=') {
        try {
            ans.value = eval(exp.value);
        } catch (error) {
            exp.value = "";
            ans.value = "";
            alert("Invalid Expression..!");
        }
    } else if(char == 'b') {
        exp.value = exp.value.substring(0, exp.value.length-1);
    } else if(char == 'c') {
        ans.value = "";
        exp.value = "";
    } else {
        exp.value += char;
    }
}
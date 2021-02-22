var a = "";
var b = "";
var num = [];
var ans;

// All the numbers and operators input are stored in an array "num" using function "sendNum()"
function sendNum(digit) {
  num.push(digit);

  if (num.length != 1) {
    a = "";
    document.getElementById("screen").innerHTML = a; // clearing the screen.
  }

  for (i = 0; i < num.length; i++) {
    a = a + num[i];
  }

  document.getElementById("screen").innerHTML = a; 
}

// when the user presses "=", function "equalTo()" is called
function equalTo() {
  document.getElementById("screen").innerHTML = "";

  for (i = 0; i < num.length; i++) {
    b += num[i];
  }

  ans = eval(b);

  document.getElementById("screen").innerHTML = ans; // result display

  while (num.length > 0) {
    num.pop(); // emptying the array "num"
  }

  num.push(ans.toString());
}

// When user presses "AC", function "clearScr()" is called
function clearScr() {
  document.getElementById("screen").innerHTML = "";

  while (num.length > 0) {
    num.pop(); // emptying the array "num"
  }

  a = "";
  b = "";
}

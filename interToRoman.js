/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

let interToRoman = (n) => {
  let roman = "";
  while (n >= 1000) {
    roman += "M";
    n -= 1000;
  }
  if (n >= 900) {
    roman += "CM";
    n -= 900;
  }
  if (n >= 500) {
    roman += "D";
    n -= 500;
  }
  while (n >= 100) {
    if (n == 400) {
      roman += "CD";
      n -= 400;
    } else {
      roman += "C";
      n -= 100;
    }
  }
  if (n >= 90) {
    roman += "XC";
    n -= 90;
  }
  if (n >= 50) {
    roman += "L";
    n -= 50;
  }
  while (n >= 10) {
    if (n == 40) {
      roman += "XL";
      n -= 40;
    } else {
      roman += "X";
      n -= 10;
    }
  }
  if (n >= 9) {
    roman += "IX";
    n -= 9;
  }
  if (n >= 5) {
    roman += "V";
    n -= 5;
  }
  while (n >= 1) {
    if (n == 4) {
      roman += "IV";
      n -= 4;
    } else {
      roman += "I";
      n -= 1;
    }
  }
  return roman;
};

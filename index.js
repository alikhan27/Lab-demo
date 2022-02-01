import { Stack } from './algo';
/** Find Missing Brackets */
function isBracketsBalanced(expr) {
  let s = new Stack();
  for (let i = 0; i < expr.length; i++) {
    if (expr[i] === '[' || expr[i] === '{' || expr[i] === '(') {
      s.push(expr[i]);
      continue;
    }
    if (expr[i] === ']' || expr[i] === '}' || expr[i] === ')') {
      let el = s.pop();
      switch (expr[i]) {
        case ']':
          if (el == '{' || el == '(') return false;
          break;
        case '}':
          if (el == '[' || el == '(') return false;
          break;
        case ')':
          if (el == '{' || el == '[') return false;
          break;
      }
    }
  }
  return s.len() == 0;
}
console.log(isBracketsBalanced('(a)[[]](bdfdf)(dfdf){[(dsfdsf)]}'));
/** Find The Missing Brackets */

/* Factorial  */
function factorial(num) {
  let product = 1;
  let s = new Stack();
  while (num > 1) {
    s.push(num--);
  }
  while (s.len()) {
    product *= s.pop();
  }
  return product;
}
//console.log(factorial(5));
/* Factorial  */

/* Palindrome  */

function palindrome(word) {
  let s = new Stack();
  let reverseWord = '';
  for (let i = 0; i < word.length; i++) {
    s.push(word[i]);
  }
  while (s.len() > 0) {
    reverseWord += s.pop();
  }
  return reverseWord === word ? true : false;
}
// console.log(palindrome('racecar'));

/* Palindrome  */

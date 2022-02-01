import { Stack } from './algo';

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
console.log(factorial(5));
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

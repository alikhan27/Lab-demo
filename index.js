import { Stack } from './algo';

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

console.log(palindrome('racecar'));

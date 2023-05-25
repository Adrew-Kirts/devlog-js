// you can write js here

console.log('exo-5');

let input = "Hello big whales, how are you?";

let vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  console.log(input.charAt(i));
  if (vowels.includes(input[i])) {
    resultArray.push(input[i]);
  }
}
console.log(resultArray.join('').toLocaleUpperCase());
function reverseString(input) {
  return input.split("").reverse().join("");
}

let inputText = "Nike Air Yeezy";
let reversedText = reverseString(inputText);
console.log(reversedText);

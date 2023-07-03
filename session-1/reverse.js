function reverse(word) {
  return word
    .split(" ")
    .map((w) => w.split("").reverse().join(""))
    .join(" ")
    .toString();
}

const word = "hello world";
const reversedWord = reverse(word);
console.log(reversedWord); // 'olleh'

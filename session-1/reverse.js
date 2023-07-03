function reverse(word) {
  // return word
  //   .split(" ")
  //   .map((w) => w.split("").reverse().join(""))
  //   .join(" ")
  //   .toString();
  let finalWord = ''

  for(let i = 0; i < word.length; i++) {
    finalWord += word[word.length - 1 - i];
  }

  return finalWord
}

const word = "hello";
const reversedWord = reverse(word);
console.log(reversedWord); // 'olleh'

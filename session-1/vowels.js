function checkLetterIfVowel(w) {
  vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(w)) return w;
}

function convertToVowels(word) {
  finalWord = []
  for(let i = 0; i < word.length; i++) {
    if (checkLetterIfVowel(word[i]))
    finalWord.push(word[i])
  }

  return finalWord.join('').toString();
}

const word = "thisissomeword";
const wordWithOnlyVowels = convertToVowels(word);
console.log(wordWithOnlyVowels); // iioeo

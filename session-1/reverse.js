function reverse(word) {
    return word.split(" ").map(w => w.split("").reverse().join("")).toString();
}

const word = "hello";
const reversedWord = reverse(word);
console.log(reversedWord); // 'olleh'

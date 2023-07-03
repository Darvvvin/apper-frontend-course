function isPalindrome(word) {
  if (
    word ===
    word
      .split(" ")
      .map((w) => w.split("").reverse().join(""))
      .join(" ")
      .toString()
  )
    return true;
  else return false;
}

const word = "racecar";
if (isPalindrome(word)) {
  console.log("It is a palindrome!");
} else {
  console.log("It is not a palindrome!");
}

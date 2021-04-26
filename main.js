let Phrase = require("gmammadova-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let palindromeResult = document.querySelector("#palindromeResult");
  let phrase = new Phrase(event.target.phrase.value);

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"${phrase.content}" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"${phrase.content}" is not a palindrome.`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", function() {
    palindromeTester(event);
  });
});

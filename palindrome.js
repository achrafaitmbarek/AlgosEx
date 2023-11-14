let words = [
    "kayak",
    "Paris",
    "été",
    "Ressasser"
]

function isPalindrome(word) {

    word = word.toLowerCase();

    return word === word.split("").reverse().join("");
  }

 words.forEach(function(word) {
        console.log(isPalindrome(word));      
    });

////////////////////////////////////////////

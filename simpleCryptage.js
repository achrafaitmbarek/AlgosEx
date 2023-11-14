function encryptWord(word) {

    word = word.toLowerCase();
  
    let encryptedWord = '';
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
  
      // is letter ?
      if (char >= 'a' && char <= 'z') {
        // here we Replace each letter with its position in the alphabet
        const position = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        encryptedWord += position + ' ';
      } else {
        // Non Letter ?
        encryptedWord += char;
      }
    }
  
    // Remove trailing space and return the encrypted word
    return encryptedWord.trim();
  }
  
  const originalWord = "achraf44";
  console.log(encryptWord(originalWord));
  
  
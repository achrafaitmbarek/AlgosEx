
const paragraph = `
Faites tremper les pois chiches et les fèves dans l'eau 12 h, les égoutter et les cuire 45 mn à l'auto cuiseur.
Peler oignon et ail, les hacher ainsi que le persil.
Passer les fèves et les pois chiches au mixer (ou robot).
Mélanger avec le persil, l'oignon, l'ail, la farine, les épices, le sel.
Pétrissez le tout avec vos mains en ajoutant un peu d'eau si nécessaire. Rassemblez la pâte et laisser reposer au réfrigérateur pendant minimum 30 mn.
Façonner une trentaine de boulettes de la grosseur d'une pièce de 2 euros.
Les faire frire 2/3 mn puis les égoutter sur du papier absorbant.
Servir chaud ou froid avec des petites sauces tomates aux herbes, ou sauces yaourts.
`;

function countWordOccurrences(paragraph) {
    
    const lowercasedText = paragraph.toLowerCase();
  
    // Remove special characters and split the text into an array of words
    const words = lowercasedText.replace(/[^\w\s]/g, '').split(/\s+/);
  
    // Create an object to store word occurrences
    const wordOccurrences = {};
  
    // Count occurrences of each word
    words.forEach(word => {
      if (wordOccurrences[word]) {
        // Increment the occurrence count if the word already exists in the object
        wordOccurrences[word]++;
      } else {
        // Initialize the occurrence count if the word is encountered for the first time
        wordOccurrences[word] = 1;
      }
    });
  
    // Convert the object to an array of { word, occurrences } objects
    const result = Object.entries(wordOccurrences).map(([word, occurrences]) => ({
      word,
      occurrences
    }));
  
    return result;
  }
  
  console.log(countWordOccurrences(paragraph))
  

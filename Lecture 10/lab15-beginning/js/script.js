function getWords(text) {
    // REMOVE ALL CHARACTERS FROM THE TEXT
    text = text.replace(/\./g, '');
    text = text.replace(/,/g, '');
    text = text.replace(/:/g, '');
    text = text.toLowerCase();

    // CONVER TO AN ARRAY
    let words = text.split(' ');
    words.sort();
    return words;

}

function getUniqueWords(words) {
    let uniqueWords = [];
    uniqueWords.push(words[0]);
    for (let i = 0; i < words.length; i++) {
        if (words[i] !== words[i-1]) {
            uniqueWords.push(words[i]);
        }
    }
    return uniqueWords;

}

function main() {     
    let text = "With innovative approaches and advanced methodologies, Vecta Corporation provides scalable business solutions to help companies achieve success through revenue increase, cost management, and user satisfaction. Our approach stems from the three most important business growth aspects: helping companies reach prospects, assist in converting prospects to customers, and assist in retaining those customers. This is accomplished through our interactive solutions and expertise in providing a memorable and positive user experience."; 

    console.log("Welcome to the Wordlist Application.");

    // GET WORDS
    let words = getWords(text);
    console.log(words);

    // GET UNIQUE WORDS
    let uniqueWords = getUniqueWords(words);

    // DISPLAY NUMBER OF WORDS AND UNIQUE WORDS
    console.log(`Number of words: ${words.length}`);
    console.log(`Number of unique words: ${uniqueWords.length}`);

    // DISPLAY WORDS AND THEIR COUNT TOTALS
    console.log('Unique word occurrences:');
    for (let word of words) {       //will give you ALL the words.  If you want the unique words use "for (let word of uniqueWords)"
        console.log(`${word}\n`);
    }



}

main();
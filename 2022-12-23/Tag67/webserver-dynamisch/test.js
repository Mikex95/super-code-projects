const getWords = (words) => {
    console.log(words);
    words.forEach(element => {
        printWords(element)
    });
}

const printWords = (word) => {
    console.log(word);
}


getWords(["Hallo","ich","bin","sueß"], printWords)
var findWords = function (words) {
    let firstRow = new Set("qwertyuiop".split(""));
    let secondRow = new Set("asdfghjkl".split(""));
    let thirdRow = new Set("zxcvbnm".split(""));
    let result = [];

    for (let i = 0; i < words.length; i++) {
        let currentWord = words[i].toLowerCase();
        let currentRow;
        let passed = true;
        if (firstRow.has(currentWord[0])) {
            currentRow = firstRow;
        }
        else if (secondRow.has(currentWord[0])) {
            currentRow = secondRow;
        }
        else if (thirdRow.has(currentWord[0])) {
            currentRow = thirdRow;
        }

        for (let j = 0; j < currentWord.length; j++) {
            if (!currentRow.has(currentWord[j])) {
                passed = false;
                break;
            }
        }
        if (passed) {
            result.push(words[i]);
        }
    }
    return result;
};

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
console.log(findWords(["omk"]));
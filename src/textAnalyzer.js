
const fs = require('fs');


function countWords(text) {
    if (text.trim() === '') {
        return 0;
    }

    const words = text.trim().split(/\s+/);
    return words.length;
}


function findLongestWord(text) {
    const words = text.trim().split(/\s+/);
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i].replace(/^[^\w]+|[^\w]+$/g, '');

        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}


function countLines(text) {
    if (text.length === 0) {
        return 0;
    }

    return text.split(/\r?\n/).length;
}


function analyzeFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    console.log('=== TEXT ANALYSIS ===');
    console.log('Total Words:', countWords(content));
    console.log('Longest Word:', findLongestWord(content));
    console.log('Total Lines:', countLines(content));
}


const path = require('path');


function testTextAnalyzer() {
    const files = [
        'quotes.txt',
        'sample-text.txt'
    ];

    for (let i = 0; i < files.length; i++) {
        const filePath = path.join(__dirname, '..', 'data', files[i]);

        const content = fs.readFileSync(filePath, 'utf8');

        console.log('\nAnalyzing ' + files[i] +'');
        console.log('Total Words:', countWords(content));
        console.log('Longest Word:', findLongestWord(content));
        console.log('Total Lines:', countLines(content));
    }
}


if (require.main === module) {
    testTextAnalyzer();
}


module.exports = {
    countWords,
    findLongestWord,
    countLines,
    analyzeFile
};


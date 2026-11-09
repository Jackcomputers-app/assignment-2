const {
    countWords,
    findLongestWord,
    countLines
} = require('../src/textAnalyzer');


describe('Word Count Tests', () => {

    test('should count the total number of words', () => {
        const result = countWords('Hello world this is a test');
        expect(result).toBe(6);
    });

    test('should count a single word', () => {
        const result = countWords('Hello');
        expect(result).toBe(1);
    });

    test('should return zero for empty text', () => {
        const result = countWords('');
        expect(result).toBe(0);
    });

});


describe('Longest Word Tests', () => {

    test('should find the longest word', () => {
        const result = findLongestWord('Hello programming world');
        expect(result).toBe('programming');
    });

    test('should handle a single word', () => {
        const result = findLongestWord('JavaScript');
        expect(result).toBe('JavaScript');
    });

    test('should return an empty string for empty text', () => {
        const result = findLongestWord('');
        expect(result).toBe('');
    });

});


describe('Line Count Tests', () => {

    test('should count multiple lines', () => {
        const result = countLines('Line one\nLine two\nLine three');
        expect(result).toBe(3);
    });

    test('should count a single line', () => {
        const result = countLines('Hello world');
        expect(result).toBe(1);
    });

    test('should return zero for empty text', () => {
        const result = countLines('');
        expect(result).toBe(0);
    });

});

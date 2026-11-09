
const {
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage
} = require('../src/numberProcessor');


describe('Sum Tests', () => {

    test('should calculate the sum of numbers', () => {
        const result = calculateSum([85, 92, 78]);
        expect(result).toBe(255);
    });

    test('should handle negative numbers', () => {
        const result = calculateSum([-5, 10, -3]);
        expect(result).toBe(2);
    });

    test('should return zero for an empty array', () => {
        const result = calculateSum([]);
        expect(result).toBe(0);
    });

});


describe('Highest Number Tests', () => {

    test('should find the highest number', () => {
        const result = findHighest([85, 92, 78]);
        expect(result).toBe(92);
    });

    test('should find the highest negative number', () => {
        const result = findHighest([-5, -10, -3]);
        expect(result).toBe(-3);
    });

    test('should return null for an empty array', () => {
        const result = findHighest([]);
        expect(result).toBeNull();
    });

});


describe('Lowest Number Tests', () => {

    test('should find the lowest number', () => {
        const result = findLowest([85, 92, 78]);
        expect(result).toBe(78);
    });

    test('should find the lowest negative number', () => {
        const result = findLowest([-5, -10, -3]);
        expect(result).toBe(-10);
    });

    test('should return null for an empty array', () => {
        const result = findLowest([]);
        expect(result).toBeNull();
    });

});


describe('Average Tests', () => {

    test('should calculate the average', () => {
        const result = calculateAverage([85, 92, 78]);
        expect(result).toBe(85);
    });

    test('should calculate a decimal average', () => {
        const result = calculateAverage([10, 20, 25]);
        expect(result).toBeCloseTo(18.3333, 4);
    });

    test('should return null for an empty array', () => {
        const result = calculateAverage([]);
        expect(result).toBeNull();
    });

});

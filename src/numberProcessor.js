
const fs = require('fs');
const path = require('path');


function readNumbers(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    const lines = content.split('\n');
    const numbers = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.length > 0) {
            const number = Number(line);

            if (!Number.isFinite(number)) {
                throw new Error('Invalid number: ' + line);
            }

            numbers.push(number);
        }
    }

    return numbers;
}


function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}


function findHighest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let highest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }

    return highest;
}


function findLowest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let lowest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }

    return lowest;
}


function calculateAverage(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    return calculateSum(numbers) / numbers.length;
}


function processNumbers() {
    const filePath = path.join(__dirname, '..', 'data', 'sample-numbers.txt');
    const numbers = readNumbers(filePath);

    console.log('NUMBER ANALYSIS');
    console.log('Numbers:', numbers);
    console.log('Sum:', calculateSum(numbers));
    console.log('Highest:', findHighest(numbers));
    console.log('Lowest:', findLowest(numbers));
    console.log('Average:', calculateAverage(numbers));
}


if (require.main === module) {
    processNumbers();
}


module.exports = {
    readNumbers,
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage,
    processNumbers
};

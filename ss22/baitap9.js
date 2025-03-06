let testCases = [2, 1, 7, 1, 1, 8, 6, 2, 2, 7];

let uniqueTestCases = [...new Set(testCases)];
uniqueTestCases.sort((a, b) => a - b);
console.log(uniqueTestCases);
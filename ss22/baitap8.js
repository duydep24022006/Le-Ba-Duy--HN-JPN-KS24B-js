let testCases = [
    [3, 9, 7, 4, 1, 8, 6, 2, 5, 7]
];

for (let arr of testCases) {
    let freq = new Map();
    let maxFreq = 0;
    let minValue = Infinity;
    for (let num of arr) {
        if (freq.has(num)) {
            freq.set(num, freq.get(num) + 1);
        } else {
            freq.set(num, 1);
        }
        maxFreq = Math.max(maxFreq, freq.get(num));
    }
    for (let [key, value] of freq) {
        if (value === maxFreq) {
            minValue = Math.min(minValue, key);
        }
    }
    console.log("Output:", minValue);
}

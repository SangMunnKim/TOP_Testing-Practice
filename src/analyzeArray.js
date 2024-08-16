function analyzeArray(array) {
    if (array.length === 0) return null; // Handle empty array case

    const sortedArray = [...array].sort((a, b) => a - b); // Clone array to avoid mutating original
    const length = array.length;
    const min = sortedArray[0];
    const max = sortedArray[length - 1];
    const sum = array.reduce((prev, current) => prev + current, 0);
    const average = sum / length;

    return {
        "average": average,
        "min": min,
        "max": max,
        "length": length
    };
}
module.exports = analyzeArray;

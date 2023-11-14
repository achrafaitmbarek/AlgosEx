function sumOfTwoDigitsInTheTable(arr, target) {

    const seenNumbers = new Set();

    for (const num of arr) {
        // the difference between the target and the current number
        const difference = target - num;

        // Check if the difference is in the set
        if (seenNumbers.has(difference)) {
            // If found, return true
            return true;
        }
        // Add the current number to the set
        seenNumbers.add(num);
    }

    // If no pair is found, return false
    return false;
}

// Test cases
const result1 = sumOfTwoDigitsInTheTable([1, 8, 3, 6, 9, 2, 5, 12], 9); 
const result2 = sumOfTwoDigitsInTheTable([1, 1, 3, 6, 9, 2, 5, 12], 14); 
const result3 = sumOfTwoDigitsInTheTable([1,80,3,6,9,2,6,12], 17) 
const result4 = sumOfTwoDigitsInTheTable([1,90,9,6,32,2,5,12], 18) 

console.log("result1: ", result1);
console.log("result2: ", result2);


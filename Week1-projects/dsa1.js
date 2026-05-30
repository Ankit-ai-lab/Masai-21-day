function findPairs(nums, k) {
    const numSet = new Set(nums);
    let count = 0;

    for (const num of numSet) {
        if (numSet.has(num + k)) {
            count++;
        }
    }

    return count;
}

// Example usage:
const nums = [3, 1, 4, 1, 5];
const k = 2;
console.log(findPairs(nums, k)); // Output: 2   
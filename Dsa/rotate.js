function rotate(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotate(arr, k)); // Output: [4, 5, 1, 2, 3] 

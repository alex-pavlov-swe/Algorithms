/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let result = 0;
    while (n !== 0) {
        if (n & 1 !== 0) {
            result += 1;
        }
        n = n >>> 1;
    }
    return result;
};

// >>> Shifts right by pushing zeros in from the left, and let the rightmost bits fall off
// >> Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
// << Shifts left by pushing zeros in from the right and let the leftmost bits fall off

// n.toString(2)  - decimal to binary, might have problems with some negative numbers
// console.log((n >>> 0).toString(2), n); - decimal to binary that fixes negative problem
// parseInt(binary, 2); - binary to decimal

//10 = 1*2^1 + 0*2^0 = 2

// a ^ (b ^ c) = (a ^ b) ^ c

// a ^ a = 0
// a ^ 0 = a

// 0 ^ 0 = 0
// 0 ^ 1 = 1
// 1 ^ 0 = 1
// 1 ^ 1 = 0
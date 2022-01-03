/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfTwo = function(n) {
    if (n <= 0) return false;

    return ((~n + 1) & n) === n;
};

// x =    00100
// ~x =   11011
// ~x+1 = 11100

// x & (~x + 1) = 00100
/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function(n) {
    if (n === 0) return false;
    let number = n;

    while (number % 3 === 0) {
        number = number / 3;
    }

    return number === 1;
};

// time: (log3 n)
var getSum = function(a, b) {
    let sum = a ^ b,
        carry = (a & b) << 1;
    while (carry) {
        let newSum = sum ^ carry;
        carry = (sum & carry) << 1;
        sum = newSum;
    }
    return sum;
};

// 2 + 3 = 5

// 010
// 011
// 101

// 001 = a ^ b
// 100 = (a & b) << 1 = carry
// 101

// carry=0
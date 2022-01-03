var countBits = function(n) {
    var output = [0],
        offset = 1;

    for (let i = 1; i < n.length; i++) {
        if (offset * 2 === i) {
            offset *= 2;
        }
        output[i] = 1 + output[i - offset];
    }
};

// 0  =  00000 0
// 1  =  00001 1 = 1 + dp(n - 1)
// 2  =  00010 1 = 1 + dp(n - 2)
// 3  =  00011 2 = 1 + dp(n - 2)

// 4  =  00100 1 = 1 + dp(n - 4)
// 5  =  00101 2 = 1 + dp(n - 4)
// 6  =  00110 2 = 1 + dp(n - 4)
// 7  =  00111 3 = 1 + dp(n - 4)

// 8  =  01000 1 = 1 + dp(n - 8)
// 9  =  01001 2 = 1 + dp(n - 8)
// 10 =  01010 2 = 1 + dp(n - 8)
// 11 =  01011 3 = 1 + dp(n - 8)
// 12 =  01100 2 = 1 + dp(n - 8)
// 13 =  01101 3 = 1 + dp(n - 8)
// 14 =  01110 3 = 1 + dp(n - 8)
// 15 =  01111 4 = 1 + dp(n - 8)


// O(n log n) time solution:
var countBits2 = function(n) {
    let output = [];

    for (let i = 0; i <= n; i++) {
        let number = i, count = 0;
        while (number !== 0) {
            if (number & 1) {
                count += 1;
            }
            number = number >>> 1;
        }
        output.push(count);
        console.log(number, count, output);
    }
    return output;
};
var addBinary = function(a, b) {
    let aIndex = a.length - 1,
        bIndex = b.length - 1,
        carry = 0,
        result = '';

    while (aIndex >=0 || bIndex >= 0 || carry > 0) {
        let currSum = carry;
        if (aIndex >= 0) currSum += Number.parseInt(a[aIndex]);
        if (bIndex >= 0) currSum += Number.parseInt(b[bIndex]);
        result += (currSum % 2).toString();
        carry = currSum > 1 ? 1 : 0;
        aIndex -= 1;
        bIndex -= 1;
    }
    return result.split('').reverse().join('');
};

console.log(addBinary('1', '1'));

1
1
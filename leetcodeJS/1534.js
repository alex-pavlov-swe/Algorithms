var findKthPositive = function(arr, k) {
    let numbersMissed = 0, index = 1;

    while (numbersMissed < k && index < arr.length) {
        numbersMissed += arr[index] - arr[index - 1] - 1;
        index += 1;
    }
    console.log(index, numbersMissed);

    if (index === arr.length) {
        return arr[arr.length - 1] + (k - numbersMissed);
    }

    return arr[index - 1] - 1 + (k - numbersMissed - 1);
};

console.log(findKthPositive([1,2,3,4], 2));
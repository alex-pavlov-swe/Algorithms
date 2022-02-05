var findKthPositive = function(arr, k) {
    if (k <= arr[0] - 1) return k;
    k -= arr[0] - 1;

    for (let i = 0; i < arr.length - 1; i++) {
        let numbersMissed = arr[i + 1] - arr[i] - 1;
        if (k <= numbersMissed) return arr[i] + k;
        k -= numbersMissed;
    }
    return arr[arr.length - 1] + k;
};
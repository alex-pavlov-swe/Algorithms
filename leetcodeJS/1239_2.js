var maxLength = function(arr) {
    const n = arr.length;
    let maxLen = 0;

    backtrack(0, "");

    return maxLen;

    function backtrack(start, prevStr) {
        maxLen = Math.max(maxLen, prevStr.length);

        if (start === n) return;

        console.log(start, maxLen);

        for (let i = start; i < n; i++) {
            const word = arr[i];

            if (isUnique(prevStr + word)) backtrack(i + 1, prevStr + word);
        }
    }

    function isUnique(str) {
        let bits = 0 | 0;
        for (const char of str) {
            const index = char.charCodeAt(0) - 97;

            if (bits & (1 << index)) return false;
            bits |= (1 << index);
        }
        return true;
    }
};

console.log(maxLength(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]));
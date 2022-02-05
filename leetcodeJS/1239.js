var maxLength = function(arr) {
    var maxLength = 0;

    var isWordUnique = function(str) {
        var map = {};
        for (var i = 0; i < str.length; i++) {
            if (map[str[i]]) {
                return false;
            }
            map[str[i]] = 1;
        }
        return true;
    }

    var backtrack = function(start, prevStr) {
        maxLength = Math.max(maxLength, prevStr.length);
        if (start == arr.length) return;

        for (let i = start; i < arr.length; i++) {
            if (isWordUnique(prevStr + arr[i])) {
                backtrack(i + 1, prevStr + arr[i]);
            }
        }
    }
    backtrack(0, '');
    return maxLength;
};

console.log(maxLength(["a","b","c","d"]));
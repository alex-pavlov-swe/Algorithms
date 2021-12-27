var nextPermutation = function(nums) {
    var resultNumber = 0,
        numsNumber = Number.parseInt(nums.join(''));

    var backtracking = function(array, path) {
        if (path.length === nums.length) {
            const pathNumber = Number.parseInt(path.join(''));
            if (pathNumber > numsNumber && (pathNumber < resultNumber || resultNumber === 0)) {
                resultNumber = pathNumber;
            }
            console.log(array, path, resultNumber);
        } else {
            for (var i = 0; i < array.length; i++) {
                path.push(array[i]);
                backtracking(array.filter((item, index) => index !== i), path);
                path.pop();
            }
        }
    }

    backtracking(nums, []);
    return resultNumber.toString().split('').map(item => Number.parseInt(item));
};

console.log(nextPermutation([1,2,3]));
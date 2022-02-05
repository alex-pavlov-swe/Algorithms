/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if (m === 0) return false;
    let n = matrix[0].length,
        left = 0, right = m * n - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2),
            currItem = matrix[Math.floor(middle / n)][middle % n];

        if (currItem === target) return true;
        if (currItem < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return false;
};
/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    var n = matrix.length,
        m = n > 0 ? matrix[0].length : 0,
        result = 0;
    
    for (var i = 0; i < n; i++) {
        result = Math.max(result, matrix[i][0]);
    }
    for (var j = 0; j < m; j++) {
        result = Math.max(result, matrix[0][j]);
    }
    
    for (var i = 1; i < n; i++) {
        for (var j = 1; j < m; j++) {
            if (matrix[i][j] > 0) {
                matrix[i][j] = Math.min(matrix[i][j-1], matrix[i-1][j], matrix[i-1][j-1]) + 1;
                result = Math.max(result, matrix[i][j]);
            }
        }
    }
    return result*result;
};
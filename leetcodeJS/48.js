var rotate = function(matrix) {
    var col, temp;
    for (var i = 0; i < parseInt(matrix.length / 2); i++) {
        [matrix[i], matrix[matrix.length - i - 1]] = [matrix[matrix.length - i - 1], matrix[i]];
    }

    for (var i = 0; i < matrix.length; i++) {
        for (var j = i + 1; j < matrix[i].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            console.log(matrix);
        }
    }
};

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);
console.log(matrix);
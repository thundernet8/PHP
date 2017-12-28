/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var size = matrix.length;
    for (var i = 0; i < size - 1; i++) {
        var r = size - 2 * i;
        for (var j = 0; j < r - 1; j++) {
            var swap = matrix[j + i][i + r - 1];
            matrix[j + i][i + r - 1] = matrix[i][i + j];
            matrix[i][i + j] = matrix[i + r - 1 - j][i];
            matrix[i + r - 1 - j][i] = matrix[i + r - 1][i + r - 1 - j];
            matrix[i + r - 1][i + r - 1 - j] = swap;
        }
    }
};
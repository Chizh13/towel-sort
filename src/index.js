
module.exports = function towelSort(matrix) {
    const array = [];
    if (matrix === undefined) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < matrix[i].length; j++) {
                array.push(matrix[i][j]);
            }
        } else {
            for (let j = matrix[i].length - 1; j > -1; j--) {
                array.push(matrix[i][j]);
            }
        }
    }
    return array;
};

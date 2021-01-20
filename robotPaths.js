/*
 * Complete the 'robotPaths' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */
function robotPaths(matrix) {
    // Write your code here
    const rows = matrix.length, columns = matrix[0].length
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let count = 0

    function traverse(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= columns || matrix[row][col] === 1) {
            return
        }
        if (row === rows - 1 && col === columns - 1) {
            count++
            return
        }
        matrix[row][col] = 1
        for (let dir of directions) {
            traverse(row + dir[0], col + dir[1])
        }
        matrix[row][col] = 0
    }
    traverse(0, 0)
    return count
}
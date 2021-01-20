/*
 * Complete the 'matrixSpiral' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function matrixSpiral(matrix) {
    // Write your code here
    if (matrix.length === 0) {
        return []
    }
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let i = 0, j = 0, currentDir = 0
    let result = []
    while (true) {
        console.log(i, j, matrix[i][j])
        result.push(matrix[i][j])
        matrix[i][j] = null
        if (!matrix[i + directions[currentDir][0]] || !matrix[i + directions[currentDir][0]][j + directions[currentDir][1]]) {
            currentDir = (currentDir + 1) % 4
        }
        let count = 0
        for (let dir of directions) {
            if (!matrix[i + dir[0]] || !matrix[i + dir[0]][j + dir[1]]) {
                count++
            }
        }
        if (count >= 4) {
            break
        }
        i += directions[currentDir][0]
        j += directions[currentDir][1]
    }
    return result
}
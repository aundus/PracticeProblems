/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const visited = new Array(board.length)
    for (let i = 0; i < visited.length; i++) {
        visited[i] = new Array(board[0].length).fill(false)
    }

    function isWordAtCoords(x, y, idx) {
        console.log(x, y, idx)
        if (idx === word.length) {
            return true
        }
        if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || visited[x][y] || board[x][y] !== word[idx]) {
            return false
        }

        visited[x][y] = true
        for (let dir of directions) {
            if (isWordAtCoords(x + dir[0], y + dir[1], idx + 1)) {
                return true
            }
        }
        visited[x][y] = false
        return false
    }

    let firstChar = word[0]
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === firstChar && isWordAtCoords(i, j, 0)) {
                return true
            }
        }
    }

    return false
};
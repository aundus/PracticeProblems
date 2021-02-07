/*
 * Complete the 'roverMove' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER matrixSize
 *  2. STRING_ARRAY cmds
 */

function roverMove(matrixSize, cmds) {
    // Write your code here
    const directions = {
        RIGHT: [0, 1],
        LEFT: [0, -1],
        DOWN: [1, 0],
        UP: [-1, 0],
    }
    let pos = [0, 0]

    cmds.forEach(cmd => {
        if (pos[0] + directions[cmd][0] < 0
            || pos[0] + directions[cmd][0] >= matrixSize
            || pos[1] + directions[cmd][1] < 0
            || pos[1] + directions[cmd][1] >= matrixSize) {
            return
        }
        pos = [pos[0] + directions[cmd][0], pos[1] + directions[cmd][1]]
    })
    return pos[0] * matrixSize + pos[1]

}
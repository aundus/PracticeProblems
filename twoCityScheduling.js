/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
    const n = costs.length / 2
    const table = new Array(n + 1)
    for (let i = 0; i < table.length; i++) {
        table[i] = new Array(n + 1).fill(0)
    }

    for (let i = 1; i <= n; i++) {
        table[i][0] = table[i - 1][0] + costs[i - 1][0]
    }
    for (let j = 1; j <= n; j++) {
        table[0][j] = table[0][j - 1] + costs[j - 1][1]
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            table[i][j] = Math.min(table[i - 1][j] + costs[i + j - 1][0], table[i][j - 1] + costs[i + j - 1][1])
        }
    }
    //console.log(table)
    return table[n][n]
};

// Recursive
// var twoCitySchedCost = function(costs) {
//     function helper(i, current, c1, c2){
//         if(i === costs.length){
//             return current
//         }
//         if(c1 >= costs.length / 2){
//             return helper(i+1, current + costs[i][1], c1, c2+1)
//         }
//         if(c2 >= costs.length / 2){
//             return helper(i+1, current + costs[i][0], c1+1, c2)
//         }
//         return Math.min(helper(i+1, current + costs[i][0], c1+1, c2), helper(i+1, current + costs[i][1], c1, c2+1))
//     }
//     return helper(0, 0, 0, 0)
// };
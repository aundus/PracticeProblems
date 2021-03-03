/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const s = new Set()
    for (const n of nums) {
        s.add(n)
    }
    let i = 1
    while (true) {
        if (!s.has(i)) {
            return i
        }
        i++
    }
};

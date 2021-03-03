/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const result = []
    result.push([])
    function helper(start, current) {
        if (start === nums.length) {
            return
        }
        for (let i = start; i < nums.length; i++) {
            const sub = current.concat([nums[i]])
            result.push(sub)
            helper(i + 1, sub)
        }
    }
    helper(0, [])
    return result
};
/**
 * Peak Element problem from leetcode
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const minInt = Number.MIN_SAFE_INTEGER;
    console.log(nums[212], nums[507])
    let prev, next;
    for( let i = 0; i < nums.length; i++ ){
        prev = nums[i-1] !== undefined ? nums[i-1] : minInt;
        next = nums[i+1] !== undefined ? nums[i+1] : minInt;
        if( nums[i] > prev && nums[i] > next ){
            return i;
        }
    }
    return -1;
};

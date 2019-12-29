/**
 * Array Partition I problem from leetcode
 * @param {number[]} nums
 * @return {number}
 */

function sortNumber(a, b) {
  return a - b;
}

var arrayPairSum = function(nums) {
    const sorted = nums.sort(sortNumber);
    let sum = 0;
    for( let i = 0; i < sorted.length; i += 2 ){
        sum += Math.min( sorted[i], sorted[i+1] );
    }
    return sum;
};

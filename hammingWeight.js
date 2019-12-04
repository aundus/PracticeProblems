/**
 * Hamming weight problem from leetcode
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const nbin = ( n >>> 0 ).toString(2);
    let count = 0;
    for(let i = 0; i < nbin.length; i++){
        if( nbin[i] === '1' ){
            count ++;
        }
    }
    return count;
};

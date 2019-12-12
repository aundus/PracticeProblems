/**
 * Repeated Substring pattern Problem from Leetcode
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let subStr, repeat;
    for( let i = 1; i <= s.length / 2; i ++){
        repeat = s.substring( 0, i );
        subStr = repeat;
        while( subStr === s.substring(0, subStr.length ) ){
            if( subStr === s ){
                return true;
            }
            subStr += repeat;
        }
    }
    return false;
};

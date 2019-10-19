/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const negative = x < 0;
    x = negative ? x * -1 : x;
    const str = String(x);
    let rev = '';
    for( let i = str.length - 1; i >= 0; i-- ){
        rev += str[i];
    }
    rev = negative ? parseInt(rev) * -1 : parseInt(rev);
    if (rev > 2147483648 || rev < -2147483647 ) 
        return 0;
    return rev;
};

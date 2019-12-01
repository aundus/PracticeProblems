/**
 * Hamming Distance Problem from Leetcode
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xbin = (x >>> 0).toString(2);
    let ybin = (y >>> 0).toString(2);
    const zero = '0';
    if( xbin.length !== ybin.length ){
        if( xbin.length > ybin.length ){
            ybin = zero.repeat( xbin.length - ybin.length ) + ybin;
        }
        else{
            xbin = zero.repeat( ybin.length - xbin.length ) + xbin;
        }
    }
    console.log(xbin, ybin)
    let hammCount = 0;
    for( let i = 0; i < xbin.length ; i++) {
        if( xbin[i] !== ybin[i]){
            hammCount ++;
        }
        
    }
    return hammCount;
};

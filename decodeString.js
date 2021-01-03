/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(str) {
    const firstParenIdx = str.indexOf("[")
    const lastParenIdx = getMatchingParenIdx(str, firstParenIdx)
    if (firstParenIdx === -1 || lastParenIdx === -1) {
        return str
    }
    const stringBetween = str.slice(firstParenIdx + 1, lastParenIdx)
    let repeatTimes = ''
    let count = 1
    while (!isNaN(parseInt(str[firstParenIdx - count]))) {
        repeatTimes = str[firstParenIdx - count] + repeatTimes
        count++;
    }
    const recurse = decodeString(stringBetween)
    const before = str.slice(0, firstParenIdx - count + 1)
    const after = str.slice(lastParenIdx + 1)
    return before + recurse.repeat(parseInt(repeatTimes)) + decodeString(after)
};

 function getMatchingParenIdx(string, start) {
    let open = 1
    let close = 0
    for (let i = start + 1; i < string.length; i++) {
        if (string[i] === '[') {
            open++
        }
        else if (string[i] === "]") {
            close++
        }
        if (open === close) {
            return i
        }
    }
    return -1
}


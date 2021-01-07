/*
 * Complete the 'powerset' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING word as parameter.
 */

function powerset(word) {
    // Write your code here
    const s = new Set()
    s.add('')
    function helper(start, current) {
        if (start === word.length) {
            return
        }
        for (let i = start; i < word.length; i++) {
            const sub = current + word[i]
            s.add(sub)
            helper(i + 1, sub)
        }
    }
    helper(0, '')
    return Array.from(s)
}


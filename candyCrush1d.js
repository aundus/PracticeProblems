// Write a function to crush candy in one dimensional board. In candy crushing games, groups of like items
// are removed from the board. In this problem, any sequence of 3 or more like items should be removed and any items 
// adjacent to that sequence should now be considered adjacent to each other. This process should be repeated as 
// many time as possible. You should greedily remove characters from left to right.
// Input: "aaabbbc"
// Output: "c"
// Explanation:
// 1. Remove 3 'a': "aaabbbbc" => "bbbbc"
// 2. Remove 4 'b': "bbbbc" => "c"

// Input: "aabbbacd"
// Output: "cd"
// Explanation:
// 1. Remove 3 'b': "aabbbacd" => "aaacd"
// 2. Remove 3 'a': "aaacd" => "cd"

function candyCrush(str) {
    if (str.length < 3) {
        return str
    }
    let currentCh = str[0]
    let count = 1

    for (let i = 1; i < str.length; i++) {
        if (str[i] === currentCh) {
            count++
        }
        else {
            count = 1
            currentCh = str[i]
        }
        if (count >= 3 && str[i + 1] !== currentCh) {
            const before = str.slice(0, i - count + 1)
            const after = str.slice(i + 1)
            return candyCrush(before + after)
        }
    }
    return str

}

console.log(candyCrush('aabbccddeeedcba'))
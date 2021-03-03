// Given the integer array candyType of length n, return the maximum number of different types of 
// candies she can eat if she only eats n / 2 of them.

var distributeCandies = function (candyType) {
    const s = new Set()
    for (const ct of candyType) {
        s.add(ct)
    }

    return Math.min(s.size, candyType.length / 2)
};
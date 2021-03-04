/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.cache = {}
    this.arr = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    const ret = this.cache[val] === undefined
    if (ret) {
        this.arr.push(val)
        this.cache[val] = this.arr.length - 1
    }
    return ret
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    const ret = this.cache[val] !== undefined

    if (ret) {
        const idx = this.cache[val]
        const lastIdx = this.arr.length - 1
        this.cache[this.arr[lastIdx]] = idx

        const tmp = this.arr[idx]
        this.arr[idx] = this.arr[lastIdx]
        this.arr[lastIdx] = tmp
        this.arr.pop()
        delete this.cache[val]
    }

    return ret
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
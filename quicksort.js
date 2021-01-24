function quicksort(arr) {
    function helper(left, right) {
        // base
        if (left >= right) {
            return
        }

        let pivot = right, j = left
        for (let i = left; i <= right; i++) {
            if (arr[i] < arr[pivot]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                j++
            }
        }

        [arr[pivot], arr[j]] = [arr[j], arr[pivot]]

        // recurse
        helper(left, j - 1)
        helper(j + 1, right)
    }

    helper(0, arr.length - 1);

    return arr;
}
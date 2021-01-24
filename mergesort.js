function merge(left, right) {
    let results = [];

    while (left.length && right.length) {
        results.push(left[0] < right[0] ? left.shift() : right.shift());
    }

    return [...results, ...left, ...right];
}

function mergeSort(input) {
    if (input.length < 2) {
        return input;
    }

    const mid = Math.floor(input.length / 2);

    const left = input.slice(0, mid);
    const right = input.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
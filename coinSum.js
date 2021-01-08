/*
 * Complete the 'coinSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY coins
 *  2. INTEGER total
 */

function coinSum(coins, total) {
  // Write your code here
  const s = new Set()
  let result = 0
  function helper(sum, start) {
    // base case
    if (sum === 0) {
      result++
      return;
    }

    if (sum < 0) return;

    // recursive case
    for (let i = start; i < coins.length; i++) {
      helper(sum - coins[i], i);
    }
  }

  helper(total, 0);

  return result
}

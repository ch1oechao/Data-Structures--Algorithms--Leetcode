// You are climbing a stair case. It takes n steps to reach to the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// https://leetcode.com/discuss/104148/share-my-java-solution

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var count = [],
        i;
    count[0] = 1;
    count[1] = 1;
    for (i = 2; i < n + 1; i++) {
        count[i] = count[i - 1] + count[i - 2];
    }
    return count[n];
};

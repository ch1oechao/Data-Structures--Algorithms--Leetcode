// Given an integer, write a function to determine if it is a power of three.
// 
// https://leetcode.com/discuss/100490/java-one-line-solution
// 
// public boolean isPowerOfThree(int n) {
//    // The expression "(int) Math.pow(3, (int) (Math.log(Integer.MAX_VALUE) / Math.log(3.0))" returns max integer that is "power of 3"
//     return n > 0 && (int) Math.pow(3, (int) (Math.log(Integer.MAX_VALUE) / Math.log(3.0))) % n == 0;
// }

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 1) {
        n /= 3;
    }
    return n === 1;
};

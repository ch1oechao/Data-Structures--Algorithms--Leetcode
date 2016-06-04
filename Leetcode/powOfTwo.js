// Given an integer, write a function to determine if it is a power of two.
// 
// 参考
// https://leetcode.com/discuss/102833/1ms-99%25-java-bitwise-solution
// 
// Example n = 8, bin(8) = 1000, bin(8-1) = 0111 1000 & 0111 is 0 and powers of 2 are always 10(2), 100(4), 1000(8), 10000(16) and so on
// public boolean isPowerOfTwo(int n) {
//     if(n < 1) return false;
//     return (0 == ((n - 1) & n));
// }

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 1) return false;
    return (n & (n - 1)) === 0;
};

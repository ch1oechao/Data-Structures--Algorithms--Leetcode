// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.


/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
    return +n > 1 ? n.toString(2).split('').reduce(function(a, b) { return +a + +b }) : n;
};

var hammingWeight = function(n) {
    n = n.toString(2);

    var pos = n.indexOf(1),
        count = 0;

    while (pos > -1) {
        count++;
        pos = n.indexOf(1, pos + 1);
    }

    return count;
};


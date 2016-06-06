/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    var fn = function(num) {
        return num < 10 ? (num * num) : fn(Math.floor(num / 10)) + (num % 10) * (num % 10);
    }

    while (n >= 10) {
        n = fn(n)
    }

    return n === 1 ||  n === 7
};
 
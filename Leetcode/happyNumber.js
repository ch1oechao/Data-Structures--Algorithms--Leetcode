/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    var fn = function(num) {
        if (num < 10) return num * num;
        return fn(parseInt(num / 10, 10)) + (num % 10) * (num % 10);
    }

    while (n > 10) {
        n = fn(n)
    }

    return n === 1
};
 
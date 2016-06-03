/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {

    var fn = function(n) {
        var res = 0
        do {
            res += n % 10
            n = parseInt(n / 10, 10)
        } while (n > 0)
        return res;
    }

    var fn2 = function(n) {
        if (n < 10) return n;
        return fn2(parseInt(n / 10, 10)) + n % 10;
    }    

    while (num >= 10) {
        num = fn2(num)
    }

    return num

};
 
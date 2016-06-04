// Given a roman numeral, convert it to an integer.
// Input is guaranteed to be within the range from 1 to 3999.

// 罗马数字与十进位数字的意义不同，它没有表示零的数字，与进位制无关。
// 用罗马数字表示数的基本方法一般是把若干个罗马数字写成一列，它表示的数等于各个数字所表示的数相加的和。
// 但是也有例外，当符号Ⅰ、Ⅹ或C位于大数的后面时就作为加数；位于大数的前面就作为减数。
// 例如：Ⅲ=3，Ⅳ=4，Ⅵ=6，ⅩⅨ=19，ⅩⅩ=20，ⅩLⅤ=45，MCMⅩⅩC=1980。

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var len = s.length,
        sum = 0,
        ROMAN_CHAR = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        };

    while (len) {
        len--;
        sum += ROMAN_CHAR[s[len]];
        if (ROMAN_CHAR[s[len - 1]] < ROMAN_CHAR[s[len]]) {
            sum -= ROMAN_CHAR[s[len - 1]];
            len--;
        }
    }

    return sum;
};

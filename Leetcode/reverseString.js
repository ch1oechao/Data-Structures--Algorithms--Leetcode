/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var len = s.length,
        str = '';
    while (len) {
        str += s[len - 1];
        len--;
    }
    return str;
};
 
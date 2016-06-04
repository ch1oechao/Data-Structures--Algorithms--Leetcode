// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var len = s.length,
        i = len,
        res = 0;

    while (i) {
        res = res * 26 + (s.charCodeAt(len - i) - 'A'.charCodeAt(0) + 1);
        i--;
    }

    return res;
};
     
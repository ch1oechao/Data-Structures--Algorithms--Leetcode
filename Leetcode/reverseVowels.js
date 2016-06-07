// Write a function that takes a string as input and reverse only the vowels of a string.
// Example 1:
// Given s = "hello", return "holle".
// Example 2:
// Given s = "leetcode", return "leotcede".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
        len = s.length,
        strArr = s.split('');
        vowelsArr = [],
        idx = 0,
        i = 0;

    for (; i < len; i++) {
        if (VOWELS.indexOf(strArr[i]) !== -1) vowelsArr.push(strArr[i]);
    }

    while (len) {
        if (VOWELS.indexOf(s[len - 1]) !== -1) {
            strArr[len - 1] = vowelsArr[idx];
            idx++;
        }
        len--;
    }

    return strArr.join('');
};

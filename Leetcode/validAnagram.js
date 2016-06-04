// Given two strings s and t, write a function to determine if t is an anagram of s.

// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sLen = s.length,
        tLen = t.length,
        sHash = {},
        tHash = {},
        i, j;

    if (sLen !== tLen) return false;

    function makeHash(str) {
        var len = str.length,
            hash = {};
        while (len) {
            var curChar = str[len - 1];
            if (!!hash[curChar]) {
                hash[curChar] += 1;
            } else {
                hash[curChar] = 1;
            }
            len--;
        }
        return hash;
    }

    sHash = makeHash(s);
    tHash = makeHash(t);

    for (i in sHash) {
        if (sHash[i] !== tHash[i]) return false;
    }

    return true;

};

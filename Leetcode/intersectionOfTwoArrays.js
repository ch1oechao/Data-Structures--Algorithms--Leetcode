// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (nums1.length < nums2.length) {
        var tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }

    var sort = function(arr) {
        Array.prototype.sort.call(arr, function(a, b) {
            return a - b;
        });
    }

    sort(nums1);
    sort(nums2);

    var len1 = nums1.length,
        len2 = nums2.length,
        arr =[],
        hash = {},
        i, j, k;
    for (i = 0; i < len1; i++) {
        for (j = 0; j < len2; j++) {
            if (nums1[i] < nums2[j]) break;
            if (nums1[i] === nums2[j]) {
                hash[nums1[i]] = nums1[i]
            }
        }
    }

    for (k in hash) {
        arr.push(+k);
    }

    return arr;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
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

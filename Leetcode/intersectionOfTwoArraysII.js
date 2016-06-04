// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// 

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length < nums2.length) {
        var tmp = nums1;
        nums1 = nums2;
        nums2 = tmp;
    }

    var len1 = nums1.length,
        len2 = nums2.length,
        arr =[],
        i, j;

    for (i = 0; i < len1; i++) {
        for (j = 0; j < len2; j++) {
            if (nums1[i] === nums2[j]) {
                arr.push(nums2[j]);
                nums2.splice(j, 1);
                len2--;
                break;
            }
        }
    }

    return arr;
};


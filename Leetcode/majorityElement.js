// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    var len = nums.length,
        hash = {},
        tmp = 0,
        i, max;

    if (len <= 2) return nums[0];
    if (!len) return 0;

    for (i = 0; i < len; i++) {
        if (hash[nums[i]] === (null || undefined)) {
            hash[nums[i]] = 0;
        } else {
            hash[nums[i]] += 1;
            if (hash[nums[i]] > tmp) {
                tmp = hash[nums[i]];
                max = +nums[i];
            } else if (hash[nums[i]] === tmp) {
                max = 1;
            }
        }
    }

    return max;
};

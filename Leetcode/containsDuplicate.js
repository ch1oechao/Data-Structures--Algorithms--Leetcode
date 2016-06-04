// Given an array of integers, find if the array contains any duplicates. 
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var len = nums.length,
        hash = {};

    while (len) {
        if (hash[nums[len - 1]] === (null || undefined)) {
            hash[nums[len - 1]] = 1;
        } else if (hash[nums[len - 1]] === 1) {
            return true;
        }
        len--;
    }

    return false;
};

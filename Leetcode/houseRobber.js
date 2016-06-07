// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that 
// adjacent houses have security system connected 
// and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, 
// determine the maximum amount of money you can rob tonight without alerting the police.

// https://leetcode.com/discuss/102577/java-o-n-time-o-1-space-solution

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var len = nums.length,
        i = 2;
        
    if (!len) return 0;
    if (len === 1) return nums[0];
    if (len === 2) return Math.max(nums[0], nums[1]);

    nums[1] = Math.max(nums[0], nums[1]);
    for(; i < len; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 2], nums[i - 1]);
    }
    return nums[len - 1];
};

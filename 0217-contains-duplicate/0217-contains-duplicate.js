/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const hashSet = new Set(nums);
    return hashSet.size !== nums.length;
};
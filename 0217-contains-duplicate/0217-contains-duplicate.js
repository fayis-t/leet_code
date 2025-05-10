/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   const sorted = nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length; i++){
        if(sorted[i] === sorted[i+1]){
            return true;
        }
    }
    return false;
};
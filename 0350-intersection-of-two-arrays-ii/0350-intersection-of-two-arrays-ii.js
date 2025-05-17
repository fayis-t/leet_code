/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let obj = {};

    for(let i=0; i<nums1.length; i++){
        obj[nums1[i]] = obj[nums1[i]] ? obj[nums1[i]] + 1 : 1;
    }

    for(let i=0; i<nums2.length; i++){
        if(obj[nums2[i]]){
            obj[nums2[i]]--;
            result.push(nums2[i]);
        }
    }

    return result;
};
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    getCombination(candidates, target, [], result, 0, 0);
    return result;
};

function getCombination(candidates, target, currArr, result, currSum, index){
    if(index >= candidates.length || currSum > target) return;
    if(currSum === target){
        result.push([...currArr]);
        return;
    }
    currArr.push(candidates[index]);
    getCombination(candidates, target, currArr, result, currSum + candidates[index], index);
    currArr.pop();
    getCombination(candidates, target, currArr, result, currSum, index + 1);
}
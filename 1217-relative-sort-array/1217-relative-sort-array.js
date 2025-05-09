/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = [];
    for(let num of arr2){
        while (arr1.includes(num)){
            result.push(num);
            arr1.splice(arr1.indexOf(num), 1);
        }
    }

    arr1.sort((a, b) => a-b);
    return result.concat(arr1);
};
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let res = 0;
    for(let i=0; i<arr.length; i++){
        let count = 0, sum = 0;
        for(let j=i; j<arr.length; j++){
            sum += arr[j];
            count++;
            if(count % 2 ) res += sum;
        }
    }
    return res;
};
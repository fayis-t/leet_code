/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    const map = new Map();
    let max = -1;
    
    for(const num of nums){
        const maxDigit = getMaxDigit(num);
        const pair = map.get(maxDigit);
        if(pair == null){
            map.set(maxDigit, num);
        }else{
            max = Math.max(max, num + pair);
            map.set(maxDigit, Math.max(num, pair));
        }
    }
    return max;
};

function getMaxDigit(n){
    let max = 0;
    while(n > 0){
        const mod = n % 10;
        max = Math.max(max, mod);
        n = (n - mod)/10;
    }
    return max;
}
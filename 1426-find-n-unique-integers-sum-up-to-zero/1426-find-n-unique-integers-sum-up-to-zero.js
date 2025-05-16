/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let arr = [];

    for(let i=0; i<n/2; i++){
        if(n % 2 == 0){
            arr.push(i+1, -(i+1));
        }else{
            if(i == 0){
                arr.push(i);
            }else{
                arr.push(i, -i);
            }
        }
    }
    return arr;
};
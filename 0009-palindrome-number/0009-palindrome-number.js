/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     string = x.toString()
    let reversed = string.split('').reverse().join('')
    if(x == reversed){
        return true
    }else{
       return false
    }
};
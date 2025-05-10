/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversed = s.split('').reverse().join('');
    
    if(s === reversed){
        return true;
    }else{
        return false;
    }
};
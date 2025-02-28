/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    function backtrack(S='', open=0, close=0){
        if(S.length === 2 * n){
            result.push(S);
            return;
        }
        if(open < n){
            backtrack(S + '(', open + 1, close);
        }
        if(close < open){
            backtrack(S + ')', open, close + 1);
        }
    }

    let result = [];
    backtrack();
    return result;
};
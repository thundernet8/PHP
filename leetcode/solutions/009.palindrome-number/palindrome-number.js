/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    var numStr = x.toString();
    var len = numStr.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
        if (numStr[i] !== numStr[len - i - 1]) {
            return false;
        }
    }
    return true;
};

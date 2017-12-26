/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    var count = strs.length;
    if (count === 0) {
        return "";
    }
    else if (count === 1) {
        return strs[0];
    }
    var prefixLen = 0;
    var i = 0;
    return strs[0].substr(0, (function () {
        for (; i < strs[0].length; i++) {
            var char = strs[0][i];
            for (var j = 1; j < count; j++) {
                if (strs[j][i] !== char) {
                    return i;
                }
            }
        }
    })());
};

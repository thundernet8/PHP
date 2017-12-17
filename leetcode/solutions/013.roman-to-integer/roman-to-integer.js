/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var romanMap = new Map([
        ["I", 1],
        ["X", 10],
        ["C", 100],
        ["M", 1000],
        ["V", 5],
        ["L", 50],
        ["D", 500]
    ]);
    var total = 0;
    var lastNum = 0;
    var chars = s.split("");
    var len = chars.length;
    for (var i = 0; i < len; i++) {
        var num = romanMap.get(chars[i]);
        if (lastNum === 0 || num <= lastNum) {
            total += num;
        }
        else {
            total = total - lastNum * 2 + num;
        }
        lastNum = num;
    }
    return total;
};

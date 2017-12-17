/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    var lastStr = "1";
    while (--n > 0) {
        var say = [];
        for (var i = 0; i < lastStr.length; i++) {
            var count = 1;
            while (i + 1 < lastStr.length && lastStr[i] === lastStr[i + 1]) {
                count++;
                i++;
            }
            say.push(count.toString() + lastStr[i]);
        }
        lastStr = say.join("");
    }
    return lastStr;
};

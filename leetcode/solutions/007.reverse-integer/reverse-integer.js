/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var reversedStr = Math.abs(x)
        .toString()
        .split("")
        .reverse()
        .join("");
    var sign = x < 0 ? "-" : "";
    var num = Number(sign +
        reversedStr.replace(/^([0]*)([0-9]+)$/, function (_match, _p1, p2) {
            return p2;
        }));
    if (num <= Math.pow(2, 31) - 1 && num >= -Math.pow(2, 31)) {
        return num;
    }
    return 0;
};

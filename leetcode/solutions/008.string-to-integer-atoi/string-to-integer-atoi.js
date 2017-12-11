/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var sign = "";
    var numStr = "";
    for (var i = 0; i < str.length; i++) {
        if (/[^0-9\+-\s]/.test(str[i])) {
            break;
        }
        if (sign && (str[i] === "+" || str[i] === "-")) {
            break;
        }
        if ((numStr || sign) && str[i] === " ") {
            break;
        }
        if (str[i] === " ") {
            continue;
        }
        if (str[i] === "+" || str[i] === "-") {
            sign = str[i];
        }
        else {
            numStr += str[i];
        }
    }
    var num = numStr ? Number(sign + numStr) : 0;
    if (num <= Math.pow(2, 31) - 1 && num >= -Math.pow(2, 31)) {
        return num;
    }
    else {
        return num < 0 ? -Math.pow(2, 31) : Math.pow(2, 31) - 1;
    }
};

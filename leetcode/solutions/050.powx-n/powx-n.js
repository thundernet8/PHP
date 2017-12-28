/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / (x * myPow(x, Math.abs(1 + n)));
    }
    if (n % 2) {
        var tmp = myPow(x, (n - 1) / 2);
        return x * tmp * tmp;
    }
    else {
        var tmp = myPow(x, n / 2);
        return 1 * tmp * tmp;
    }
};

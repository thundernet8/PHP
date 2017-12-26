/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    var count = 0;
    var MAX_INT = Math.pow(2, 31) - 1;
    var MIN_INT = Math.pow(2, 31) * -1;
    var isNegative = (dividend >= 0 && divisor < 0) || (dividend < 0 && divisor > 0);
    if (divisor === 0) {
        return isNegative ? MIN_INT : MAX_INT;
    }
    if (dividend === MIN_INT) {
        if (Math.abs(divisor) === 1) {
            return divisor < 0 ? MAX_INT : MIN_INT;
        }
        dividend += Math.abs(divisor);
        count++;
    }
    if (divisor === MIN_INT) {
        return count;
    }
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    var base = 0;
    while (divisor <= dividend >> 1) {
        divisor <<= 1;
        base++;
    }
    while (count < MAX_INT && base >= 0) {
        if (dividend >= divisor) {
            count += 1 << base;
            dividend -= divisor;
        }
        divisor >>= 1;
        base--;
    }
    return count * (isNegative && count !== 0 ? -1 : 1);
};

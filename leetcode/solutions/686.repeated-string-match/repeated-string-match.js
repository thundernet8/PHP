/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function (A, B) {
    var lenA = A.length;
    var lenB = B.length;
    var min = Math.ceil(lenB / lenA);
    var max = Math.ceil(lenB / lenA) + 1;
    var str = "";
    for (var i = min; i <= max; i++) {
        if (!str) {
            str = new Array(min).fill(A).join("");
        }
        else {
            str += A;
        }
        if (str.includes(B)) {
            return i;
        }
    }
    return -1;
};

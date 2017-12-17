/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var e3 = ["", "M", "MM", "MMM"];
    var e2 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var e1 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var e0 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return (e3[Math.floor(num / 1000)] +
        e2[Math.floor((num % 1000) / 100)] +
        e1[Math.floor((num % 100) / 10)] +
        e0[Math.floor(num % 10)]);
};

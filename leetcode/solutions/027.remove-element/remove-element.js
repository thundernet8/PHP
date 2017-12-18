/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var len = 0;
    nums.forEach(function (num, index) {
        if (len !== 0) {
            nums[index - len] = num;
        }
        if (num === val) {
            len++;
        }
    });
    return nums.length - len;
};

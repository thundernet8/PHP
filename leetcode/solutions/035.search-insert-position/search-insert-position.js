/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var len = nums.length;
    if (len === 0) {
        return 0;
    }
    for (var i = 0; i < len; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return len;
};

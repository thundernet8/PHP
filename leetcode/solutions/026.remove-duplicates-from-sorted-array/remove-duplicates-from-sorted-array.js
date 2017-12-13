/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var len = 0;
    nums.forEach(function (num, index) {
        if (index === 0) {
            len = 1;
        }
        else {
            if (num !== nums[len - 1]) {
                nums[len] = num;
                len++;
            }
        }
    });
    return len;
};

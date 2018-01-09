/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) {
        return [];
    }
    var results = [];
    var keyMap = {};
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        var m = i + 1;
        var n = nums.length - 1;
        while (m !== n) {
            var sum = nums[i] + nums[m] + nums[n];
            if (sum === 0) {
                var list = [nums[i], nums[m], nums[n]];
                var key = [nums[i], nums[m], nums[n]].join("_");
                if (!keyMap[key]) {
                    results.push(list);
                    keyMap[key] = true;
                }
                m++;
            }
            else if (sum > 0) {
                n--;
            }
            else {
                m++;
            }
        }
    }
    return results;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    if (nums.length < 4) {
        return [];
    }
    var results = [];
    var keyMap = {};
    nums.sort(function (a, b) { return a - b; });
    for (var i = 0; i < nums.length - 3; i++) {
        for (var j = i + 1; j < nums.length - 2; j++) {
            var m = j + 1;
            var n = nums.length - 1;
            while (m !== n) {
                var sum = nums[i] + nums[j] + nums[m] + nums[n];
                if (sum === target) {
                    var list = [nums[i], nums[j], nums[m], nums[n]];
                    var key = new Array(0)
                        .concat(list)
                        .sort(function (a, b) { return a - b; })
                        .join("_");
                    if (!keyMap[key]) {
                        results.push(list);
                        keyMap[key] = true;
                    }
                    m++;
                }
                else if (sum > target) {
                    n--;
                }
                else {
                    m++;
                }
            }
        }
    }
    return results;
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    var map = {};
    var sortedStrs = strs.map(function (str) {
        return str
            .split("")
            .sort(function (a, b) { return a.charCodeAt(0) - b.charCodeAt(0); })
            .join("");
    });
    for (var i = 0; i < strs.length; i++) {
        if (map[sortedStrs[i]]) {
            map[sortedStrs[i]].push(strs[i]);
        }
        else {
            map[sortedStrs[i]] = [strs[i]];
        }
    }
    return Object.keys(map).map(function (key) { return map[key]; });
};
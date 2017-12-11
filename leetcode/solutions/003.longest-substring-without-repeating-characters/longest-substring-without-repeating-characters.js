/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length <= 1) {
    return s.length;
  }
  var substring = "";
  s.split("").reduce(function(previous, current) {
    var index = previous.indexOf(current);
    var next = ~index
      ? index < previous.length
        ? previous.substring(index + 1) + current
        : current
      : previous + current;
    if (next.length > substring.length) {
      substring = next;
    }
    return next;
  }, "");
  return substring.length;
};
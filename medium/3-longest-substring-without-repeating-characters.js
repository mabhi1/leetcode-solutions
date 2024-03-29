/*
  Two Pointer Approach
  Increment end pointer until you don't find repeating character
  After any character is found again, repeat the process
*/
function lengthOfLongestSubstring(s) {
  // If s is empty, return 0
  if (!s) return 0;

  start = end = 0;
  ans = 1;
  visited = {};

  // Loop until the end pointer reaches to length
  while (end < s.length) {
    if (s[end] in visited && visited[s[end]] >= start) {
      // If character is found in visited, move the start pointer next to end
      start = visited[s[end]] + 1;
    } else {
      // check for the max length, store end in visited and increment it
      ans = Math.max(ans, end - start + 1);
      visited[s[end]] = end;
      end += 1;
    }
  }

  // Return the max length
  return ans;
}

result = lengthOfLongestSubstring("pwwkew");
console.log(result); // Output - 3

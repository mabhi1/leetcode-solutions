/*
  Creating a object for storing visited numbers and their indices
  Time Complexity - O(n)
  Space Complexity - O(n)
*/

function twoSum(nums, target) {
  // Object to store number and it's index
  visited = {};

  // Loop through the list
  for (let i = 0; i < nums.length; i++) {
    // If remainder is already visited, return
    if (target - nums[i] in visited) {
      firstIndex = visited[target - nums[i]];
      return [firstIndex, i];
    }

    // Add the number to visited object
    visited[nums[i]] = i;
  }
}

result = twoSum([2, 7, 11, 15], 9);
console.log(result); // Output - [0, 1]

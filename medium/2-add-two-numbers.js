/*
  Traverse both the lists. Create a node with the sum and carry
  Time Complexity - O(MAX(n, m))
  Space Complexity - O(1)
*/
function addTwoNumbers(l1, l2) {
  // New list for the result
  const result = new ListNode(0);
  let current = result;
  let carry = 0;

  // Loop while any of the required values is not null
  while (carry || l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    // Create the next node with the sum
    current.next = new ListNode(sum % 10);
    current = current.next;
    carry = sum >= 10 ? 1 : 0;
  }

  // Return without the first node
  return result.next;
}

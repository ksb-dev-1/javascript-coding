export default function binaryTreeEqual(a, b) {
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a.val !== b.val) {
    return false;
  }

  if (binaryTreeEqual(a.left, b.left) && binaryTreeEqual(a.right, b.right)) {
    return true;
  }
  return false;
}

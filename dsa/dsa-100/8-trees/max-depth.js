function binaryTreeMaximumDepth(root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }

      if (current.right) {
        queue.push(current.right);
      }
    }
    depth++;
  }
  return depth;
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(a);

// a
// / \
// b   c
// / \   \
// d   e   f

function binaryTreeFlip(root) {
  if (!root) return null;

  const current = root;

  const temp = current.left;
  current.left = current.right;
  current.right = temp;

  binaryTreeFlip(current.left);
  binaryTreeFlip(current.right);

  return root;
}

console.log(binaryTreeFlip(a));

// function binaryTreeFlip(root) {
//   if (!root) return null;

//   const queue = [];

//   queue.push(root);

//   while (queue.length > 0) {
//     const current = queue.shift();

//     const temp = current.left;
//     current.left = current.right;
//     current.right = temp;

//     if (current.left) {
//       queue.push(current.left);
//     }

//     if (current.right) {
//       queue.push(current.right);
//     }
//   }
//   return root;
// }

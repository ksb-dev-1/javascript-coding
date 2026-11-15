// class TreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// const a = new TreeNode("a");
// const b = new TreeNode("b");
// const c = new TreeNode("c");
// const d = new TreeNode("d");
// const e = new TreeNode("e");
// const f = new TreeNode("f");

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(a);

// ===========================================================

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(6)),
);

// console.log(root);

function preorder(node, out = []) {
  if (!node) return out;

  out.push(node.val);

  preorder(node.left, out);
  preorder(node.right, out);

  return out;
}

function inorder(node, out = []) {
  if (!node) return out;

  inorder(node.left, out);

  out.push(node.val);

  inorder(node.right, out);

  return out;
}

function postorder(node, out = []) {
  if (!node) return out;

  postorder(node.left, out);
  postorder(node.right, out);

  out.push(node.val);

  return out;
}

function preorderIter(root) {
  const out = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (!node) continue;

    out.push(node.val);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return out;
}

function inorderIter(root) {
  const out = [];
  const stack = [];
  let node = root;

  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    out.push(node.val);
    node = node.right;
  }
  return out;
}

function postorderIter(root) {
  const out = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (!node) continue;

    out.push(node.val);

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return out.reverse();
}

//        1
//       / \
//      2   3
//     / \   \
//    4   5   6

console.log(preorder(root));
console.log(inorder(root));
console.log(postorder(root));

console.log(preorderIter(root));
console.log(inorderIter(root));
console.log(postorderIter(root));

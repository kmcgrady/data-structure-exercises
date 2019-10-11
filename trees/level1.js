// For these exercises, we make the assumption that we will working with the
// following data definitions:
//
// A Tree is an object of the following format:
// {
//   value: VALUE,
//   children: [Array of Tree]
// }
//
// A Binary Tree is one of the following:
//  - null
//  - an object of the following format:
//    {
//       value: VALUE,
//       left: Binary Tree,
//       right: Binary Tree
//    }
//

// Write a function named treeCount that takes in the following:
//   tree (a Tree)
// The function returns a the number of values in the tree.
// Example:
//    1
//   /|\       produces 4
//  2 4 7
function treeCount(tree) {

}

// Write a function named binTreeCount that takes in the following:
//   tree (a Binary Tree)
// The function returns a the number of values in the tree.
// Example:
//    1
//   / \       produces 3
//  2   7
function binTreeCount(tree) {

}

// Write a function named treeHeight that takes in the following:
//   tree (a Tree)
// The function returns a the height of the longest branch.
// Example:
//    1
//   /|\       produces 2
//  2 4 7
//
//    1
//   /|       produces 3
//  2 4
//    |
//    7
function treeHeight(tree) {

}

// Write a function named binTreeHeight that takes in the following:
//   tree (a Tree)
// The function returns a the height of the longest branch.
// Example:
//    1
//   / \       produces 2
//  2   7
//
//    1
//   / \       produces 3
//  2   4
//     / \
//    *   7
function binTreeHeight(tree) {

}

// Write a function named sumTree that takes in the following:
//   tree (a Tree)
// The function returns a the sum of the all the values in the tree.
// Example:
//    1
//   /|\       produces 14
//  2 4 7
//
//    1
//   /|       produces 14
//  2 4
//    |
//    7
function sumTree(tree) {

}

// Write a function named sumBinTree that takes in the following:
//   tree (a Binary Tree)
// The function returns a the sum of all of the values in the tree.
// Example:
//    1
//   / \       produces 10
//  2   7
function sumBinTree(tree) {

}

module.exports = {
  treeCount,
  binTreeCount,
  treeHeight,
  binTreeHeight,
  sumTree,
  sumBinTree
};

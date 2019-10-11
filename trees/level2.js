// Write a function named toArray that takes in the following:
//   tree (a Binary Search Tree)
// The function returns an array of all the elements on the tree. The order is
// maintained.
//
// Example:
//    2
//   / \       produces [1, 2, 7]
//  1   7
//
//    2
//   / \       produces [1, 2, 4, 7]
//  1   4
//     / \
//    *   7
function toArray(tree) {

}

// Write a function named findValueInTree that takes in the following:
//   tree (a Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
//
// Example:
//    1
//   /|\       with value 1, produces true
//  2 4 7      with value 3, produces false
function findValueInTree(tree, value) {

}

// Write a function named findValueInBinTree that takes in the following:
//   tree (a Binary Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
//
// Example:
//    2
//   / \       with value 1, produces true
//  1   7      with value 3, produces false
function findValueInBinTree(tree, value) {

}

// Write a function named findValueInBinSearchTree that takes in the following:
//   tree (a Binary Search Tree)
//   value (number)
// The function returns true if the value is in the tree, false otherwise.
// NOTE: The same solution as findValueInBinTree would work, but we can improve
// the efficiency of these trees.
//
// Example:
//    2
//   / \       with value 1, produces true
//  1   7      with value 3, produces false
function findValueInBinSearchTree(tree, value) {

}

// Write a function named insertInBinSearchTree that takes in the following:
//   tree (a Binary Search Tree)
//   value (number)
// The function returns a NEW Binary Search Tree with the value inserted. The
// tree does not need to be rebalanced. The position of each node will remain
// the same.
// Example:
//    2                                   2
//   / \       with value 5, produces    / \
//  1   7                               1   7
//                                         / \
//                                        5   *
function insertValueInBinSearchTree(tree, value) {

}

module.exports = {
  toArray,
  findValueInTree,
  findValueInBinTree,
  findValueInBinSearchTree,
  insertValueInBinSearchTree
}

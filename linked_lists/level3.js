// Write a function named merge that takes in the following as arguments:
//   list1 - a linked list in sorted order
//   list2 - a linked list in sorted order
// The function returns a NEW linked list that is in sorted order.
// Example:
//    merge(1 -> 3 -> 5 -> ., 2 -> 4 -> 6 -> .) produces
//       1 -> 2 -> 3 -> 4 -> 5 -> 6 -> .
function merge(list1, list2) {

}

// Write a function named map, that takes in the following as arguments:
//   list - A linked list
//   fcn - a function that takes in the value of each node as an argument.
//         it returns a new value.
// The function returns a NEW linked list, where each node's value is the same as the function applied on the original linked list.
// Example:
//    map(1 -> 2 -> 3 -> ., (num) => num * 2) produces 2 -> 4 -> 6 -> .
function map(list, fcn) {

}

// Write a function named filter, that takes in the following as arguments:
//   list - A linked list
//   fcn - a function that takes in the value of each node as an argument and
//         returns a boolean.
// The function returns a NEW linked list, where each node's value is the same
// as the function applied on the original linked list.
// Example:
//    filter(1 -> 2 -> 3 -> 4 -> ., (num) => num % 2 === 0) produces
//        2 -> 4 -> 6 -> .
function filter(list, fcn) {

}

module.exports = {
  merge,
  map,
  filter
}

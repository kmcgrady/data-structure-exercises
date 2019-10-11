// An implementation of a stack with push, pop, peek, and length methods are
// provided for you.
const Stack = require('./stack');

// Write a function named checkParens that takes in the following:
//   - str (a string)
// The function returns true if all matching start parenthesis has a matching
// end parenthesis in proper order. All other characters are ignored.
// Example:
//   checkParens('()') -> true
//   checkParens('(Hello)') -> true
//   checkParens('') -> true
//   checkParens('(') -> false
//   checkParens(')(') -> false (closes before one is open)
//   checkParens('()()') -> true
//   checkParens('(adfa(dvb)') -> false

function checkParens(str) {

}

// Write a function named validate that takes in a string of text
// representing some code filled with parentheses (), brackets [], and
// curly braces {}.
//
// (, {, [ are called "openers."
// ), }, ] are called "closers."
//
// The function returns true if the input strings openers are matched in
// properly nested with the closers.
//
// Examples:
//
// "{ [ ] ( ) }" should return true (properly nested and matched)
// "{ [ ( ] ) }" should return false (closing bracket before closing
// parentheses)
// "{ [ }" should return false (no closing bracket)
// "}" should return false (no opening curly brace)

function validate(str) {

}

// Write a function called finalText that takes in an array of commands. A
// command is one of the following:
//   * { command: 'write', text: STRING }
//   * { command: 'undo' }
//
// The array of commands follows an order of commands issued to an editor. For
// example, given the following input:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' }
// ]
//
// The function would produce 'HelloWorld'. This because we first wrote "Hello", and then we wrote "World" (no spaces or newlines in between)
//
// The undo command undoes the last write command. For example, given:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
// ]
//
// The function would produce just 'Hello'. This is because it wrote the first
// two commands, and then it undo-ed the last write command. You can undo
// multiple times too. For example, given the input:
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' },
//   { command: 'undo' }
// ]
//
// The function would produce the empty string (''). This is because it wrote
// the first two commands, and then it undid each command. If there are too
// many undo's throw an error. The following example would throw an error.
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' },
//   { command: 'undo' },
//   { command: 'undo' }
// ]
function finalText(commands) {

}

// Write a function called finalText2 that takes in an array of commands. A
// command is one of the following:
//   * { command: 'write', text: STRING }
//   * { command: 'undo' }
//   * { command: 'redo' }
//
// The difference is the addition of the redo command, which allows the ability
// to redo an action that was undone.
//
// Example: All of the above examples should apply.
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
//   { command: 'redo' }
// ]
// Should produce 'HelloWorld'
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'write', text: 'World' },
//   { command: 'undo' }
//   { command: 'redo' }
//   { command: 'undo' }
// ]
// Should produce 'Hello'
//
// Similarly, if there's nothing to redo, the function should throw an error.
//
// [
//   { command: 'write', text: 'Hello' },
//   { command: 'undo' },
//   { command: 'redo' },
//   { command: 'redo' }
// ]
// Should throw an error.
function finalText2(commands) {

}

module.exports = {
  checkParens,
  validate,
  finalText,
  finalText2
};

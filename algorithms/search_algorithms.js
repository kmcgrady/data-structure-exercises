'use strict'

const linearSearch = function(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

const binarySearch = function(array, value) {

}

module.exports = { linearSearch, binarySearch };

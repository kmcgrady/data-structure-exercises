'use strict'

const expect = require("chai").expect
const lib = require('../../algorithms/search_algorithms');
const positiveArr = [1,2,3,4,5,6];
const negativeArr = [-5,-4,-3,-2,-1];
const decimalArr = [1.1,2.4,5.5,5.6,5.7];

describe("#linearSearch", function(){
  it("does not use indexOf", function() {
    expect(lib.linearSearch.toString()).to.not.contain('indexOf');
  });

  xit("finds items in an array of positive numbers", function(){
    expect(lib.linearSearch(positiveArr, 3)).to.equal(2);
  });

  xit("finds items in an array of negative numbers", function(){
    expect(lib.linearSearch(negativeArr, -2)).to.equal(3);
  });

  xit("finds items in an array of non-integers", function(){
    expect(lib.linearSearch(decimalArr, 1.1)).to.equal(0);
  });

  xit("returns -1 when the item is not found", function(){
    expect(lib.linearSearch(decimalArr, 0)).to.equal(-1);
  });

});

describe("#binarySearch", () => {

  xit("finds items in an array of positive numbers", function(){
    expect(lib.binarySearch(positiveArr,3)).to.equal(2);
  });

  xit("finds items in an array of negative numbers", function(){
    expect(lib.binarySearch(negativeArr, -2)).to.equal(3);
  });

  xit("finds items in an array of non-integers", function(){
    expect(lib.binarySearch(decimalArr, 1.1)).to.equal(0);
  });

  xit("returns -1 when the item is not found", function(){
    expect(lib.binarySearch(decimalArr, 0)).to.equal(-1);
  });

  xit("returns the index of the element in the array via binary search", () => {
    expect(lib.binarySearch([], 'a')).to.deep.equal(-1)
    expect(lib.binarySearch(['a'], 'a')).to.deep.equal(0)
    expect(lib.binarySearch(['a','b'], 'b')).to.deep.equal(1)
    expect(lib.binarySearch(['a','b','c'], 'a')).to.deep.equal(0)
    expect(lib.binarySearch(['a','b','c'], 'b')).to.deep.equal(1)
    expect(lib.binarySearch(['a','b','c'], 'c')).to.deep.equal(2)
    expect(lib.binarySearch(['a','b','c'], '0')).to.deep.equal(-1)
    expect(lib.binarySearch(['a','b','c'], 'd')).to.deep.equal(-1)
  })

  xit("runs faster than linearSearch in the worst case", () => {
    const input = []
    const max = 10000
    for (var i = 0; i < max; i++) input.push(i)

    function benchmark(fn){
      const start = process.hrtime();
      fn()
      const diff = process.hrtime(start);
      return diff[0] * 1e9 + diff[1]; // return total number of nanoseconds
    }

    function runLinearSearch(){
      for (var i = 0; i < max; i++) {
        lib.linearSearch(input, max - 1)
      }
    }

    function runBinarySearch(){
      for (var i = 0; i < input.length; i++) {
        lib.binarySearch(input, max - 1)
      }
    }

    const linearSearchSpeed = benchmark(runLinearSearch);
    const binarySearchSpeed = benchmark(runBinarySearch);

    expect(linearSearchSpeed).to.be.gt(binarySearchSpeed * 1.5);
  })
});

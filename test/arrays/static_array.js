'use strict'

const expect = require("chai").expect
const FixedArray = require('../../arrays/fixed_array');
const { arrayPush, arrayDelete } = require('../../arrays/static_array');

describe("#arrayPush", () => {
  xit('Returns an array of instance FixedArray', () => {
    const fa = new FixedArray(3);

    fa.set(0, 1);   // Set value 1 at index 0
    fa.set(1, 2);   // Set value 2 at index 1
    fa.set(2, 3);   // Set value 3 at index 2

    const newFa = arrayPush(fa, 3);

    expect(newFa instanceof FixedArray).to.be.equal(true)
  });

  xit('Returns an array with length + 1', () => {
    const fa = new FixedArray(3);

    fa.set(0, 1);   // Set value 1 at index 0
    fa.set(1, 2);   // Set value 2 at index 1
    fa.set(2, 3);   // Set value 3 at index 2

    const newFa = arrayPush(fa, 3);

    expect(newFa.length).to.be.equal(4)
  });

  xit('Returns an array item added', () => {
    const fa = new FixedArray(3);

    fa.set(0, 1);   // Set value 1 at index 0
    fa.set(1, 2);   // Set value 2 at index 1
    fa.set(2, 3);   // Set value 3 at index 2

    const newFa = arrayPush(fa, 4);

    expect(newFa.get(3)).to.be.equal(4)
  });
});

describe("#arrayDelete", () => {
  xit('Returns an array of instance FixedArray', () => {
    const fa = new FixedArray(3);

    fa.set(0, 1);   // Set value 1 at index 0
    fa.set(1, 2);   // Set value 2 at index 1
    fa.set(2, 3);   // Set value 3 at index 2

    const newFa = arrayDelete(fa, 1);

    expect(newFa instanceof FixedArray).to.be.equal(true);
  });

  xit('Returns an array with length - 1', () => {
    const fa = new FixedArray(3);

    fa.set(0, 1);   // Set value 1 at index 0
    fa.set(1, 2);   // Set value 2 at index 1
    fa.set(2, 3);   // Set value 3 at index 2

    const newFa = arrayDelete(fa, 1);

    expect(newFa.length).to.be.equal(2);
  });

  xit('Returns an array without item', () => {
    const fa = new FixedArray(3);

    fa.set(0, 1);   // Set value 1 at index 0
    fa.set(1, 2);   // Set value 2 at index 1
    fa.set(2, 3);   // Set value 3 at index 2

    const newFa = arrayDelete(fa, 1);

    expect(newFa.get(1)).to.be.equal(3);
  });
});

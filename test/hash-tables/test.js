'use strict';

const should = require('chai').should();
const { describe, suite, it } = require('mocha');

const level1 = require('../../hash-tables/level1.js');
const level2 = require('../../hash-tables/level2.js');

describe('Hash Table', () => {
  describe('Level One', () => {
    suite('#greet', () => {
      it('should greet user in English if the provided lang is "English"', () => {
        level1.greet('english').should.equal('Welcome a Miami.');
      });

      xit('should greet user in Dutch if the provided lang is "dutch"', () => {
        level1.greet('dutch').should.equal('Welkom a Miami.');
      });

      xit('should greet the user in English for invalid inputs', () => {
        level1.greet('bob').should.equal('Welcome a Miami.');
      });

      xit('should greet the user with the correct lang even if it the input is capitolized', () => {
        level1.greet('Swedish').should.equal('Valkommen a Miami.');
      });
    });

    suite('#removeDupes', () => {
      xit('should return an empty object if given an empty array', () => {
        level1.removeDupes([]).should.eql({});
      });

      xit('should return an object with keys for each item in an array', () => {
        level1.removeDupes([true, 8, 'hi']).should.eql({'true': 0, '8': 1, 'hi': 2});
      });

      xit('should return the index of the last instance of duplicate items in the array', () => {
        level1.removeDupes(['foo', 'foo', 'bar']).should.eql({'foo': 1, 'bar': 2});
      });
    });

    suite('#onlyOdds', () => {
      xit('should return an empty object if given an empty object', () => {
        level1.onlyOdds({}).should.eql({});
      });

      xit('should return an copy of input less key-value pairs who\'s value is not odd', () => {
        level1.onlyOdds({'foo': 6, 'bar': 3, 'baz': 'bob', 13: 13}).should.eql({'bar': 3, '13': 13});
      });
    });

    suite('#charCount', () => {
      xit('should return an empty object if given an empty string', () => {
        level1.charCount('').should.eql({});
      });

      xit('should return an {} with keys for each char in a word with no dupe chars, and values for their count', () => {
        level1.charCount('red').should.eql({r: 1, e: 1, d: 1});
      });

      xit('should return an {} with keys for each char in a word with dupe chars, and values for their count', () => {
        level1.charCount('wallless').should.eql({w: 1, a: 1, l: 3, e: 1, s: 2});
      });

      xit('should not care about case', () => {
        level1.charCount('Bob').should.eql({b: 2, o: 1});
      });
    });
  });

  describe('Level Two', () => {
    suite('#reverseMerge', () => {
      xit('should return an empty array if both input arrays are empty', () => {
        level2.reverseMerge([], []).should.eql({});
      });

      xit('should be able to merge if both inputs have only a single value', () => {
        level2.reverseMerge(['one'], [1]).should.eql({'one': 1});
      });

      xit('should be able to handle merges for larger arrays of the same size', () => {
        const keyArr = ['a', 'b', 'c', 'd'];
        const valArr = [1, 2, 3, 4];

        level2.reverseMerge(keyArr, valArr).should.eql({'a': 4, 'b': 3, 'c': 2, 'd': 1});
      });

      xit('should use int 42 as value if valArr is smaller than keyArr', () => {
        const keyArr = ['a', 'b', 'c', 'd', 'e', 'f'];
        const valArr = [1, 2, 3, 4];

        level2.reverseMerge(keyArr, valArr).should.eql({'a': 42, 'b': 42, 'c': 4, 'd': 3, 'e': 2, 'f': 1});
      });

      xit('should use "foo" as value if keyArr is smaller than valArr', () => {
        const keyArr = ['a', 'b', 'c', 'd'];
        const valArr = [1, 2, 3, 4, 5, 6, 7, 8];
        const output = {'a': 8, 'b': 7, 'c': 6, 'd': 5, 'foo': [4, 3, 2, 1]}

        level2.reverseMerge(keyArr, valArr).should.eql(output);
      });
    });

    suite('#mostUsedWord', () => {
      xit('should return an {} with the most used character and its occurances as a key-value pair', () => {
        level2.mostUsedWord("fox found fixing xylophones he found fun").should.be.eql({found: 2});
      });

      xit('should not care about case', () => {
        level2.mostUsedWord('Bob dob lob bob sob nob').should.eql({bob: 2});
      });
    });

    suite('#isAnagram', () => {
      xit('should return true for the strings "creative" & "reactive"', () => {
        level2.isAnagram('creative', 'reactive').should.be.true;
      });

      xit('should return false for the strings "race" & "case"', () => {
        level2.isAnagram('race', 'case').should.be.false;
      });
    });
  });
});

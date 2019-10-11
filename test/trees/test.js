'use strict'

const expect = require("chai").expect;
const level1 = require('../../trees/level1');
const level2 = require('../../trees/level2');
const level3 = require('../../trees/level3');

describe('Trees', () => {
  describe('Level One', () => {
    describe("#treeCount", () => {
      xit('Returns the count for an simple tree', () => {
        expect(level1.treeCount({
          value: 4,
          children: []
        })).to.be.equal(1);
      });

      xit('Returns the count for a more complex tree', () => {
        expect(level1.treeCount({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        })).to.be.equal(4);
      });
    });

    describe("#binTreeCount", () => {
      xit('Returns the count for an empty binary tree', () => {
        expect(level1.binTreeCount(null)).to.be.equal(0);
      });

      xit('Returns the count for a more complex binary tree', () => {
        expect(level1.binTreeCount({
          value: 4,
          left: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        })).to.be.equal(5);
      });
    });

    describe("#treeHeight", () => {
      xit('Returns the height for an simple tree', () => {
        expect(level1.treeHeight({
          value: 4,
          children: []
        })).to.be.equal(1);
      });

      xit('Returns the height for a more complex tree', () => {
        expect(level1.treeHeight({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        })).to.be.equal(3);
      });
    });

    describe("#binTreeHeight", () => {
      xit('Returns the height for an empty binary tree', () => {
        expect(level1.binTreeHeight(null)).to.be.equal(0);
      });

      xit('Returns the height for a more complex binary tree', () => {
        expect(level1.binTreeHeight({
          value: 4,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        })).to.be.equal(3);
      });
    });

    describe("#sumTree", () => {
      xit('Returns the sum for an simple tree', () => {
        expect(level1.sumTree({
          value: 4,
          children: []
        })).to.be.equal(4);
      });

      xit('Returns the sum for a more complex tree', () => {
        expect(level1.sumTree({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        })).to.be.equal(13);
      });
    });

    describe("#sumBinTree", () => {
      xit('Returns the sum for an empty binary tree', () => {
        expect(level1.sumBinTree(null)).to.be.equal(0);
      });

      xit('Returns the sum for a more complex binary tree', () => {
        expect(level1.sumBinTree({
          value: 4,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        })).to.be.equal(14);
      });
    });
  });

  describe('Level Two', () => {
    describe("#toArray", () => {
      xit('Returns an empty array for an empty BST', () => {
        expect(level2.toArray(null)).to.be.eql([]);
      });

      xit('Returns a proper array for a more complex tree', () => {
        expect(level2.toArray({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        })).to.be.eql([2, 4, 6, 10, 12]);
      });
    });

    describe("#findValueInTree", () => {
      xit('Returns true for a value in a tree', () => {
        expect(level2.findValueInTree({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        }, 2)).to.be.equal(true);
      });

      xit('Returns false for a value not in a tree', () => {
        expect(level2.findValueInTree({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        }, 9)).to.be.equal(false);
      });
    });

    describe("#findValueInBinTree", () => {
      xit('Returns true for a value in a tree', () => {
        expect(level2.findValueInBinTree({
          value: 4,
          left: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        }, 2)).to.be.equal(true);
      });

      xit('Returns false for a value not in a tree', () => {
        expect(level2.findValueInBinTree({
          value: 4,
          left: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        }, 9)).to.be.equal(false);
      });
    });

    describe("#findValueInBinSearchTree", () => {
      xit('Returns true for a value in a tree', () => {
        expect(level2.findValueInBinSearchTree({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        }, 2)).to.be.equal(true);
      });

      xit('Returns false for a value not in a tree', () => {
        expect(level2.findValueInBinSearchTree({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        }, 9)).to.be.equal(false);
      });
    });

    describe("#insertValueInBinSearchTree", () => {
      xit('Inserts value in an empty binary search tree', () => {
        expect(level2.insertValueInBinSearchTree(null,
           9)).to.be.eql({
             value: 9,
             left: null,
             right: null
           });
      });

      xit('Inserts value in binary search tree', () => {
        expect(level2.insertValueInBinSearchTree({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        }, 5)).to.be.eql({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: {
                value: 5,
                left: null,
                right: null
              }
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        });
      });
    });
  });
});

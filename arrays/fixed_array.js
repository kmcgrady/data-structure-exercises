class FixedArray {
  constructor(length) {
    this._array = new Array(length);
    this.length = length;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    return this._array[index];
  }

  set(index, item) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    this._array[index] = item;
  }
}

module.exports = FixedArray;

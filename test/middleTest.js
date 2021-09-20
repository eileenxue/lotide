const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [4, 3] for [6, 5, 4, 3, 2, 1]", () => {
    assert.deepEqual(middle([6, 5, 4, 3, 2, 1]), [4, 3]);
  });

});
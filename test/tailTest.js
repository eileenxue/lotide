// Import functions
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("returns [2, 1] for [3, 2, 1]", () => {
    assert.deepEqual(tail([3, 2, 1]), [2, 1]);
  });

  it("returns 'Lighthouse', 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), [])
  });
});
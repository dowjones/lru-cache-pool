var LRUCachePool = require('./'),
  lru = require('lru-cache');

describe('LRU Cache Pool', function () {
  var unit;

  beforeEach(function () {
    unit = LRUCachePool(lru);
  });

  it('should create a new cache if none exist', function () {
    var c1 = unit.get('a');
    c1.set('z', 3);

    var c2 = unit.get('a');
    c2.get('z').should.equal(3);
  });
});

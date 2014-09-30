# LRU Cache Pool [![Build Status](https://secure.travis-ci.org/areusjs/lru-cache-pool.png)](http://travis-ci.org/areusjs/lru-cache-pool) [![NPM version](https://badge.fury.io/js/lru-cache-pool.svg)](http://badge.fury.io/js/lru-cache-pool)

A pool of LRU caches.


## Usage

```javascript
var LRU = require('lru-cache'),
  LRUPool = require('lru-cache-pool'),
  pool = LRUPool(LRU),
  c1, c2;

c1 = pool.get('users');
c1.put('z', 77);

c2 = pool.get('users');
assert.equal(77, c2.get('z'));
```


## Options

Options can be provided in the constructor `LRUPool(LRU, options)`,
as well as when creating new caches via get `pool.get('name', options)`.

Refer to the [lru-cache Options section of the readme](https://github.com/isaacs/node-lru-cache#options) for details.


## Note

When calling `pool.get()`, for the first time a new cache will be created
and placed in a pool. Subsequent calls will get an existing cache from the
pool, unless it is expired; in which case a new cache will be created.


## License
[MIT](LICENSE)

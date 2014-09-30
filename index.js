module.exports = LRUCachePool;

/**
 * LRUCachePool
 *
 * @param {LRUCache} LRUCache
 * @param {Object} options
 * @constructor
 */

function LRUCachePool(LRUCache, options) {
  if (!(this instanceof LRUCachePool)) {
    return new LRUCachePool(LRUCache);
  }
  this._LRUCache = LRUCache;
  this._cacheOfCaches = LRUCache(options);
}

LRUCachePool.prototype.get = function (name, options) {
  var newCache;

  if (this._cacheOfCaches.has(name)) {
    return this._cacheOfCaches.get(name);
  }

  newCache = this._LRUCache(options);
  this._cacheOfCaches.set(name, newCache);

  return newCache;
};

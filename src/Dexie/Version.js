export function _stores = function (storesObject) {
  return function (version) {
    return function () {
      return version.stores(storesObject)
    }
  }
}

export function _upgrade = function (callback) {
  return function (version) {
    return function () {
      return version.upgrade(function (trnx) {
        return callback(trnx)()
      })
    }
  }
}

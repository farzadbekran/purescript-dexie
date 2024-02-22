export function _abort = function (transaction) {
  return function () {
    return transaction.abort()
  }
}

export function _table = function (storeName) {
  return function (transaction) {
    return function () {
      return transaction.table(storeName)
    }
  }
}

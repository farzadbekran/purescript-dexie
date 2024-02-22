export function _version = function (versionNumber) {
  return function (db) {
    return function () {
      return db.version(versionNumber)
    }
  }
}

export function _table = function (storeName) {
  return function (db) {
    return function () {
      return db.table(storeName)
    }
  }
}

export function _tables = function (db) {
  return function () {
    return db.tables
  }
}

export function _transaction = function (db) {
  return function (mode) {
    return function (tables) {
      return function (callback) {
        return function () {
          return db.transaction(mode, tables, function (transaction) {
            return callback(transaction)()
          })
        }
      }
    }
  }
}

export function _open = function (db) {
  return function () {
    return db.open()
  }
}

export function _close = function (db) {
  return function () {
    return db.close()
  }
}

export function _onBlocked = function (callback) {
  return function (db) {
    return function () {
      return db.on('blocked', callback)
    }
  }
}

export function _onReady = function (callback) {
  return function (db) {
    return function () {
      return db.on('ready', callback)
    }
  }
}

export function _onVersionChange = function (callback) {
  return function (db) {
    return function () {
      return db.on('versionchange', callback)
    }
  }
}

var Dexie = require('dexie').default

export function _new = function (dbName) {
  return function () {
    return new Dexie(dbName)
  }
}

export function _delete = function (dbName) {
  return function () {
    return Dexie.delete(dbName)
  }
}

export function _getDatabaseNames = function () {
  return Dexie.getDatabaseNames()
}

export function _exists = function (dbName) {
  return function () {
    return Dexie.exists(dbName)
  }
}

export function _getDebug = function () {
  return Dexie.debug
}

export function _setDebug = function (isDebug) {
  return function () {
    Dexie.debug = isDebug
  }
}

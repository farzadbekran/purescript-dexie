export function _and = function (filter) {
  return function (collection) {
    return function () {
      return collection.and(filter)
    }
  }
}

export function _clone = function (collection) {
  return function () {
    return collection.clone()
  }
}

export function _count = function (collection) {
  return function () {
    return collection.count()
  }
}

export function _delete = function (collection) {
  return function () {
    return collection.delete()
  }
}

export function _distinct = function (collection) {
  return function () {
    return collection.distinct()
  }
}

export function _each = function (callback) {
  return function (collection) {
    return function () {
      return collection.each(function (item) {
        callback(item)()
      })
    }
  }
}

export function _eachKey = function (callback) {
  return function (collection) {
    return function () {
      return collection.eachKey(function (key) {
        callback(key)()
      })
    }
  }
}

export function _eachPrimaryKey = function (callback) {
  return function (collection) {
    return function () {
      return collection.eachPrimaryKey(function (primaryKey) {
        callback(primaryKey)()
      })
    }
  }
}

export function _eachUniqueKey = function (callback) {
  return function (collection) {
    return function () {
      return collection.eachUniqueKey(function (uniqueKey) {
        callback(uniqueKey)()
      })
    }
  }
}

export function _filter = function (filter) {
  return function (collection) {
    return function () {
      return collection.filter(filter)
    }
  }
}

export function _first = function (collection) {
  return function () {
    return collection.first()
  }
}

export function _keys = function (collection) {
  return function () {
    return collection.keys()
  }
}

export function _last = function (collection) {
  return function () {
    return collection.last()
  }
}

export function _limit = function (count) {
  return function (collection) {
    return function () {
      return collection.limit(count)
    }
  }
}

export function _modify = function (changes) {
  return function (collection) {
    return function () {
      return collection.modify(changes)
    }
  }
}

export function _offset = function (count) {
  return function (collection) {
    return function () {
      return collection.offset(count)
    }
  }
}

export function _or = function (indexName) {
  return function (collection) {
    return function () {
      return collection.or(indexName)
    }
  }
}

export function _primaryKeys = function (collection) {
  return function () {
    return collection.primaryKeys()
  }
}

export function _raw = function (collection) {
  return function () {
    return collection.raw()
  }
}

export function _reverse = function (collection) {
  return function () {
    return collection.reverse()
  }
}

export function _sortBy = function (keyPath) {
  return function (collection) {
    return function () {
      return collection.sortBy(keyPath)
    }
  }
}

export function _toArray = function (collection) {
  return function () {
    return collection.toArray()
  }
}

export function _uniqueKeys = function (collection) {
  return function () {
    return collection.uniqueKeys()
  }
}

export function _until = function (filterFn) {
  return function (includeStopEntry) {
    return function (collection) {
      return function () {
        return collection.until(filterFn, includeStopEntry)
      }
    }
  }
}

//
// Helpers

export function _createModifyMapper = function (getModifyReplaceValue) {
  return function (isModifyIgnore) {
    return function (isModifyDelete) {
      return function (fn) {
        return function (value) {
          var modifyEffect = fn(value)
          if (isModifyIgnore(modifyEffect)) return
          if (isModifyDelete(modifyEffect)) {
            delete this.value
            return
          }
          this.value = getModifyReplaceValue(modifyEffect)
        }
      }
    }
  }
}

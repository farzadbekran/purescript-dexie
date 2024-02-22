export function _add = function (item) {
  return function (nullableKey) {
    return function (table) {
      return function () {
        return table.add(item, nullableKey)
      }
    }
  }
}

export function _bulkAdd = function (items) {
  return function (nullableKeys) {
    return function (table) {
      return function () {
        return table.bulkAdd(items, nullableKeys, { allKeys: true })
      }
    }
  }
}

export function _bulkDelete = function (keys) {
  return function (table) {
    return function () {
      return table.bulkDelete(keys)
    }
  }
}

export function _bulkGet = function (keys) {
  return function (table) {
    return function () {
      return table.bulkGet(keys)
    }
  }
}

export function _bulkPut = function (items) {
  return function (nullableKeys) {
    return function (table) {
      return function () {
        return table.bulkPut(items, nullableKeys, { allKeys: true })
      }
    }
  }
}

export function _clear = function (table) {
  return function () {
    return table.clear()
  }
}

export function _count = function (table) {
  return function () {
    return table.count()
  }
}

export function _delete = function (key) {
  return function (table) {
    return function () {
      return table.delete(key)
    }
  }
}

export function _each = function (callback) {
  return function (table) {
    return function () {
      return table.each(function (item) {
        callback(item)()
      })
    }
  }
}

export function _filter = function (filterFn) {
  return function (table) {
    return function () {
      return table.filter(filterFn)
    }
  }
}

export function _get = function (indexQuery) {
  return function (table) {
    return function () {
      return table.get(indexQuery)
    }
  }
}

export function _onCreating = function (callback) {
  return function (table) {
    return function () {
      function listener(primaryKey, item, transaction) {
        var self = this
        return callback({
          primaryKey,
          item,
          transaction,
          setOnSuccess: function (onSuccess) {
            return function () {
              self.onsuccess = function (primaryKey) {
                try {
                  return onSuccess(primaryKey)()
                } catch (error) {
                  console.error(error)
                }
              }
            }
          },
          setOnError: function (onError) {
            return function () {
              self.onerror = function (error) {
                try {
                  return onError(error)()
                } catch (error) {
                  console.error(error)
                }
              }
            }
          },
        })()
      }

      table.hook('creating', listener)

      return function () {
        table.hook('creating').unsubscribe(listener)
      }
    }
  }
}

export function _onDeleting = function (callback) {
  return function (table) {
    return function () {
      function listener(primaryKey, item, transaction) {
        var self = this
        callback({
          primaryKey,
          item,
          transaction,
          setOnSuccess: function (onSuccess) {
            return function () {
              self.onsuccess = function () {
                try {
                  return onSuccess()
                } catch (error) {
                  console.error(error)
                }
              }
            }
          },
          setOnError: function (onError) {
            return function () {
              self.onerror = function (error) {
                try {
                  return onError(error)()
                } catch (error) {
                  console.error(error)
                }
              }
            }
          },
        })()
      }

      table.hook('deleting', listener)

      return function () {
        table.hook('deleting').unsubscribe(listener)
      }
    }
  }
}

export function _onReading = function (callback) {
  return function (table) {
    return function () {
      function listener(item) {
        return callback(item)()
      }

      table.hook('reading', listener)

      return function () {
        table.hook('reading').unsubscribe(listener)
      }
    }
  }
}

export function _onUpdating = function (callback) {
  return function (table) {
    return function () {
      function listener(modifications, primaryKey, item, transaction) {
        var self = this
        return callback({
          modifications,
          primaryKey,
          item,
          transaction,
          setOnSuccess: function (onSuccess) {
            return function () {
              self.onsuccess = function (updatedItem) {
                try {
                  return onSuccess(updatedItem)()
                } catch (error) {
                  console.error(error)
                }
              }
            }
          },
          setOnError: function (onError) {
            return function () {
              self.onerror = function (error) {
                try {
                  return onError(error)()
                } catch (error) {
                  console.error(error)
                }
              }
            }
          },
        })()
      }

      table.hook('updating', listener)

      return function () {
        table.hook('updating').unsubscribe(listener)
      }
    }
  }
}

export function _limit = function (n) {
  return function (table) {
    return function () {
      return table.limit(n)
    }
  }
}

export function _name = function (table) {
  return function () {
    return table.name
  }
}

export function _offset = function (n) {
  return function (table) {
    return function () {
      return table.offset(n)
    }
  }
}

export function _orderBy = function (index) {
  return function (table) {
    return function () {
      return table.orderBy(index)
    }
  }
}

export function _put = function (item) {
  return function (nullableKey) {
    return function (table) {
      return function () {
        return table.put(item, nullableKey)
      }
    }
  }
}

export function _reverse = function (table) {
  return function () {
    return table.reverse()
  }
}

export function _toArray = function (table) {
  return function () {
    return table.toArray()
  }
}

export function _toCollection = function (table) {
  return function () {
    return table.toCollection()
  }
}

export function _update = function (key) {
  return function (changes) {
    return function (table) {
      return function () {
        return table.update(key, changes)
      }
    }
  }
}

export function _whereClause = function (index) {
  return function (table) {
    return function () {
      return table.where(index)
    }
  }
}

export function _whereValues = function (valuesObject) {
  return function (table) {
    return function () {
      return table.where(valuesObject)
    }
  }
}

export function _above = function (lowerBound) {
  return function (whereClause) {
    return function () {
      return whereClause.above(lowerBound)
    }
  }
}

export function _aboveOrEqual = function (lowerBound) {
  return function (whereClause) {
    return function () {
      return whereClause.aboveOrEqual(lowerBound)
    }
  }
}

export function _anyOf = function (keys) {
  return function (whereClause) {
    return function () {
      return whereClause.anyOf(keys)
    }
  }
}

export function _anyOfIgnoreCase = function (keys) {
  return function (whereClause) {
    return function () {
      return whereClause.anyOfIgnoreCase(keys)
    }
  }
}

export function _below = function (upperBound) {
  return function (whereClause) {
    return function () {
      return whereClause.below(upperBound)
    }
  }
}

export function _belowOrEqual = function (upperBound) {
  return function (whereClause) {
    return function () {
      return whereClause.belowOrEqual(upperBound)
    }
  }
}

export function _between = function (lowerBound) {
  return function (upperBound) {
    return function (includeLower) {
      return function (includeUpper) {
        return function (whereClause) {
          return function () {
            return whereClause.between(lowerBound, upperBound, includeLower, includeUpper)
          }
        }
      }
    }
  }
}

export function _equals = function (key) {
  return function (whereClause) {
    return function () {
      return whereClause.equals(key)
    }
  }
}

export function _equalsIgnoreCase = function (key) {
  return function (whereClause) {
    return function () {
      return whereClause.equalsIgnoreCase(key)
    }
  }
}

export function _inAnyRange = function (ranges) {
  return function (includeLowers) {
    return function (includeUppers) {
      return function (whereClause) {
        return function () {
          return whereClause.inAnyRange(ranges, { includeLowers: includeLowers, includeUppers: includeUppers })
        }
      }
    }
  }
}

export function _noneOf = function (keys) {
  return function (whereClause) {
    return function () {
      return whereClause.noneOf(keys)
    }
  }
}

export function _notEqual = function (key) {
  return function (whereClause) {
    return function () {
      return whereClause.notEqual(key)
    }
  }
}

export function _startsWith = function (prefix) {
  return function (whereClause) {
    return function () {
      return whereClause.startsWith(prefix)
    }
  }
}

export function _startsWithAnyOf = function (prefixes) {
  return function (whereClause) {
    return function () {
      return whereClause.startsWithAnyOf(prefixes)
    }
  }
}

export function _startsWithIgnoreCase = function (prefix) {
  return function (whereClause) {
    return function () {
      return whereClause.startsWithIgnoreCase(prefix)
    }
  }
}

export function _startsWithAnyOfIgnoreCase = function (prefixes) {
  return function (whereClause) {
    return function () {
      return whereClause.startsWithAnyOfIgnoreCase(prefixes)
    }
  }
}

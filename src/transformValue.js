import isNil from "lodash/fp/isNil"
import curry from "lodash/fp/curry"
import parseISO from "date-fns/fp/parseISO"

export let transformValue = curry((transformer, value) => {
  switch (transformer) {
    case "string":
      return isNil(value) ? null : String(value)

    case "force-string":
      return isNil(value) ? "" : String(value)

    case "number":
      return isNil(value) ? null : Number(value)

    case "force-number":
      return isNil(value) ? 0 : Number(value)

    case "force-array":
      return Array.isArray(value) ? value : isNil(value) ? [] : [value]

    case "non-empty-str":
      return value === "" ? null : value ?? null

    case "iso-date":
      return value ? parseISO(value) : null

    case "force-iso-date":
      return parseISO(value ?? new Date().toISOString())

    default:
      if (typeof transformer === "function") {
        return transformer(value) ?? null
      }

      return value ?? null
  }
})

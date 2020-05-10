import __ from "lodash/fp/__"
import isNull from "lodash/fp/isNull"
import negate from "lodash/fp/negate"
import get from "lodash/fp/get"
import curry from "lodash/fp/curry"
import { transformValue } from "./transformValue"

export let getEntityAttr = curry((entity, attrName, valueTransformer) =>
  Array.isArray(attrName)
    ? attrName
        .map(getEntityAttr(valueTransformer, __, entity))
        .find(negate(isNull)) ?? null
    : transformValue(
        valueTransformer,
        [get(attrName, entity)].find((v) => v || v === 0 || v === false) ?? null
      )
)

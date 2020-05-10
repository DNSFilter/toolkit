import { getEntityAttr } from "./getEntityAttr"

let createStrategy = (params) => ({
  processEntity: (entity) => params.processEntity(getEntityAttr(entity)),
  processPayload: params.processPayload,
})

export default createStrategy

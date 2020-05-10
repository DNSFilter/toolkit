import { schema } from "normalizr"

let createEntitySchema = (name, relationships) =>
  new schema.Entity(name, relationships)

export default createEntitySchema

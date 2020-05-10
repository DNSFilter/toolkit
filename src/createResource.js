import useResource from "./useResource"

let createResource = (params) =>
  typeof params === "function"
    ? (...args) => useResource(params(...args))
    : () => useResource(params)

export default createResource

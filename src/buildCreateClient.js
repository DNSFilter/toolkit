let buildCreateClient = (params) => (requests) =>
  Object.entries(requests).reduce(
    (acc, [name, getParams]) => ({
      ...acc,
      [name]: (...args) => params.sendRequest(getParams(...args)),
    }),
    {}
  )

export default buildCreateClient

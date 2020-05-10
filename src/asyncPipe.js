let asyncPipe = (...fns) => (x) => fns.reduce(async (y, f) => f(await y), x)

export default asyncPipe

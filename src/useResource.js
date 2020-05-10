import useSWR from "swr"
import noop from "lodash/fp/noop"

let useResource = (params) => {
  let result = useSWR(params.id, params.fetch, {
    initialData: params.initialData,
    onSuccess: params.onSuccess ?? noop,
  })

  return {
    data: result.data,
    error: result.error,
    validating: result.isValidating,
    mutate: result.mutate,
  }
}

export default useResource

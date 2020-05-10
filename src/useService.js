import { useService as baseUseService } from "@xstate/react"

export function useService(...args) {
  let [state, send] = baseUseService(...args)

  return {
    state,
    send,
  }
}

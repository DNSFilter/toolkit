import { useMachine as baseUseMachine } from "@xstate/react"

export function useMachine(...args) {
  let [state, send, service] = baseUseMachine(...args)

  return {
    state,
    service,
    send,
  }
}

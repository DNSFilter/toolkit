import { Component } from "react"

class ErrorBoundary extends Component {
  state = {
    error: null,
  }

  static getDerivedStateFromError(error) {
    return {
      error,
    }
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line
    this.props.onCatch?.(error, info)
  }

  render() {
    if (this.state.error) {
      return this.props.fallback(this.state.error)
    }

    return this.props.children
  }
}

export default ErrorBoundary

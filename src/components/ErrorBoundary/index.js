import React, { Component } from "react";

//This is a higher order component, a component which wraps a component
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ""
  };
  //This is a method which receives the potential error and additional information
  // and it executes whenever a component wrapped within the Error Boundary throws an error.
  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong!</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;

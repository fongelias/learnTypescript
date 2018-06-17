import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

//When the constructor is not used, props and state can be passed in within <> brackets
//The types in brackets replace generic types used by React.Component
export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
  }
}

import React from 'react';

export default class extends React.Component {
  state = { foo: 0 };

  static getDerivedStateFromProps(nextProps) {
    return {
      foo: nextProps.foo,
    };
  }
  render() {
    const { a, rest } = { a: 'hello', b: 'hey', c: 'whasup' };
    return (
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        React version: {React.version}
        <div>This is state: {this.state.foo}</div>
      </div>
    );
  }
}

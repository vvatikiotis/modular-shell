import React from 'react';
import Blah from './app';

const Loading = props => <span>Loading....</span>;

class DynamicImport extends React.Component {
  state = {
    component: null,
  };

  componentDidMount() {
    this.props.load().then(component => {
      this.setState(() => ({
        component: component.default ? component.default : component,
      }));
    });
  }

  render() {
    return this.props.children(this.state.component);
  }
}

class LFM extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid red', padding: '1rem' }}>
        Shell: React version: {React.version} to bec
        <Blah />
      </div>
    );
  }
}

export default LFM;

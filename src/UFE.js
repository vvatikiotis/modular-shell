import React from 'react';
// import LFM from './apps/LFM/src';

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

export default class extends React.Component {
  componentDidMount() {
    // import()
  }

  render() {
    return (
      <div style={{ border: '1px solid red', padding: '1rem' }}>
        UFE: React version: {React.version}
        <DynamicImport load={() => import('./apps/LFM/src')}>
          {LFM =>
            LFM === null ? <Loading /> : <LFM {...this.props} foo={1} />
          }
        </DynamicImport>{' '}
      </div>
    );
  }
}

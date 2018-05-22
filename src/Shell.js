import React from 'react';

const Loading = props => <span>Loading....</span>;

class DynamicImport extends React.Component {
  state = {
    component: null,
  };

  componentDidMount() {
    this.props.load().then(component => {
      console.log('component: ', component);
      this.setState(() => ({
        component: component.default ? component.default : component,
      }));
    });
  }

  render() {
    return this.props.children(this.state.component);
  }
}

class Shell extends React.Component {
  render() {
    return (
      <div style={{ border: '1px solid red', padding: '1rem' }}>
        Shell: React version: {React.version}
        <DynamicImport
          load={() => {
            console.log('b4 load');
            return import(/* webpackChunkName: "lfm" */
            './apps/LFM/src');
          }}
        >
          {LFM =>
            LFM === null ? <Loading /> : <LFM {...this.props} foo={1} />
          }
        </DynamicImport>
      </div>
    );
  }
}

export default Shell;

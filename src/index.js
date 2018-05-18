//support IE 11 - we can use webpack.config instead where we can separate production build
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import UFE from './UFE';
// import Store from './Store';
// import createRouteSchema from './routes';
import Debug from 'debug';
window.localStorage.debug = 'shell:*';

const debug = Debug('shell:index');
// const routeSchema = createRouteSchema(Store);

const render = Comp => ReactDOM.render(Comp, document.getElementById('root'));

// let context = require.context('./', false, /\.js$/);
// if (module.hot) {
//   console.log('111111', context);
//   module.hot.accept(context, () => {
//     const NextApp = require('UFE').default;
//     console.log('22222');
//     ReactDOM.render(
//       <NextApp store={Store} routeSchema={routeSchema} />,
//       document.getElementById('root')
//     );
//   });
// }
render(<UFE />);

if (module.hot) {
  module.hot.accept('./UFE', function() {
    const NextUFE = require('./UFE').default;
    debug('Reloading...');
    render(<NextUFE />);
  });
}

import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

ReactDOM.render(
  <Root store={configureStore({})} />, 
  document.getElementById('root')
)

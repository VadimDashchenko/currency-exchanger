import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/index';
import './index.scss';
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';

const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
  </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);

reportWebVitals();

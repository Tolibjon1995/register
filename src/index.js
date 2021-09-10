import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/reducers/rootReducer';
import CounterRedux from './components/CounterRedux';

const store = createStore(rootReducer)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <CounterRedux/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './app';
import './index.css';
import counter from './reducer';


let destination = document.querySelector('#container');
let store =  createStore(counter);

ReactDOM.render(<Provider store={store}><App /></Provider>, destination);

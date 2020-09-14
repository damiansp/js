import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import ToDoList from './toDoList';


let dest = document.querySelector('#container');

ReactDOM.render(<div><ToDoList /></div>, dest);

import React, { Component } from 'react';

import ToDoItems from './toDoItems';
import './toDoList.css';


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    let itemArray = this.state.items;
    if (this._inputElement.value !== '') {
      itemArray.unshift({text: this._inputElement.value, key: Date.now()});
      this.setState({items: itemArray});
      this._inputElement.value = '';
    }
    console.log(itemArray);
    e.preventDefault(); // keep page from reloading & clearing fields on submit
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(function(item) {
        return (item.key !== key);
    });
    this.setState({items: filteredItems});
  }
  
  render() {
    return (
      <div className="toDoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
                   placeholder="enter task">
            </input>
            <button type="submit">Add</button>
          </form>
        </div>
      <ToDoItems entries={this.state.items} delete={this.deleteItem} />
      </div>);
  }
}


export default ToDoList;

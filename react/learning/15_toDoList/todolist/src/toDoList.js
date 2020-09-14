import React, { Component } from 'react';


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {items: []};
    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {}
  
  render() {
    return (
      <div className="toDoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task"></input>
            <button type="submit">Add</button>
          </form>
        </div>
      </div>);
  }
}


export default ToDoList;

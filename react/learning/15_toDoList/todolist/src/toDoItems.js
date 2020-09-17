import FlipMove from 'react-flip-move';
import React, { Component } from 'react';


class ToDoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  delete(key) { this.props.delete(key); }

  createTasks(task) {
    return (
      <li onClick={() => this.delete(task.key)}
          key={task.key}>
        {task.text}
      </li>);
  }

  render() {
    let toDoEntries = this.props.entries;
    let listItems = toDoEntries.map(this.createTasks);
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">{listItems}</FlipMove>
      </ul>);
  }
}


export default ToDoItems;

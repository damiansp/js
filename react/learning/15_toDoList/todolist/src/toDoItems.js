import React, { Component } from 'react';


class ToDoItems extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(task) { return <li key={task.key}>{task.text}</li>; }

  render() {
    let toDoEntries = this.props.entries;
    let listItems = toDoEntries.map(this.createTasks);
    return <ul className="theList">{listItems}</ul>;
  }
}


export default ToDoItems;

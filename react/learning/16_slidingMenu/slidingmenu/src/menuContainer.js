import React, { Component } from 'react';


class MenuContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    console.log('clicked');
    e.stopPropagation();
  }

  toggleMenu() { this.setState({visible: !this.state.visible}); }
  
  render() {
    return (
      <div>
        <div>
          <p>One of these kids is doing his own thing</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebee</li>
            <li>Aenean</li>
            <li>Consctetur</li>
          </ul>
        </div>
      </div>);
  }
}


export default MenuContainer;

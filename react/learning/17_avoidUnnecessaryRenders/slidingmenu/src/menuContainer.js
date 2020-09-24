import React, { Component } from 'react';

import Menu from './menu';
import MenuButton from './menuButton';


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
        <MenuButton handleMouseDown={this.handleMouseDown} />
        <Menu handleMouseDown={this.handleMouseDown}
              menuVisibility={this.state.visible} />
        <div>
          <p>One of these kids is doing his own thing</p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebee</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>
      </div>);
  }
}


export default MenuContainer;

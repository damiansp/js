import React, { PureComponent } from 'react';

import './menuButton.css';


class MenuButton extends PureComponent {
  /* If extending Component class (PureComponent handles automatically): 
   * Note PureComponents add computation time...
  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.handleMouseDown === this.props.handleMouseDown);
  }
  */
  
  render() {
    console.log('Rendering: MenuButton');
    return (
      <button id="roundButton" onMouseDown={this.props.handleMouseDown}>
      </button>);
  }
}


export default MenuButton;

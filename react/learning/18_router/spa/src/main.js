import React, { Component } from 'react';
import { HashRouter, NavLink, Route } from 'react-router-dom';

import Contact from './contact';
import Home from './home';
import Stuff from './stuff';


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
      　　　<Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
      　　</div>
        </div>
      </HashRouter>);
  }
}


export default Main;

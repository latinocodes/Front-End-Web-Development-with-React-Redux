import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar dark color="danger">
        <div className="container">
          <NavbarBrand href="/"><h3>Confusion</h3></NavbarBrand>
        </div>
      </Navbar>
      
      <Menu />
      </div>
    );
  }
}

export default App;

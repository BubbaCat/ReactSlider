import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <p> Ma booooy </p>
        <Hello name="evgeniy" surname="datguy" />
          <h1> HELLO WORLD !</h1>
      </div>
    );
  }
}

function Hello(props) {
   return ( 
     <div> 
     <h1> Мое имя {props.name} фамилия  {props.surname} </h1>
      <a href= "{props.name}">ссылка на мой профиль </a>
     </div>
    )
   }


export default App;

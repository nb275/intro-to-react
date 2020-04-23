import React, { Component } from 'react';
import logo from './logo.svg';
import './Todo.css';

class Todo extends Component {
render() {
  return (


    <li id="todoListItem1" class="struckthrough textstyling">
    Write Server Side Code

    <input type="checkbox" id="CheckboxItem1"/>

    <button id="deleteItem1">Remove ToDo</button>
    </li>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}



}
export default Todo;



// class App extends Component { -> class Todo extends Component {

import React, { Component } from 'react';
// import logo from './logo.svg';
import './Todo.css';

class Todo extends Component {

  constructor(props) {
    super(props);
    this.state = {isChecked: 'true'};
    this.name = props.name;

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    if(this.isChecked===true){
      console.log('now unchecked, now unstruckthrough');
    const element = document.getElementById("todoItemText");
    element.classList.remove("struckthrough2");
    this.isChecked=false;
  }
  else{
    console.log('now checked, now struckthrough');
    const element = document.getElementById("todoItemText");
    element.classList.add("struckthrough2");
    this.isChecked=true;
  }
   }



render() {

  return (



    <li id="todoListItem1" className="struckthrough textstyling">

    <span id="todoItemText">
    {this.name}
    </span>
    <input type="checkbox"
     id="CheckboxItem1"
     onChange={this.handleChange}
     />

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

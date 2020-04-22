import React, { Component } from 'react';
// import logo from './logo.svg';
import './NewTodo.css';

class NewTodo extends Component {
render() {
  return (

    <div className="row">
        <div className="col-sm-4" id="empty">
        </div>
        <div className="col-sm-4" id="notempty">
          <form
           onSubmit={this.props.addTodo}
          >
          <input type="text" id="newAdd"/>
          <button type="button" onClick={this.props.addTodo} id= "myBtn">Add ToDo</button>
          </form>
        </div>
      </div>

  );
}



}
export default NewTodo;

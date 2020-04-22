import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoItems: [],
      newTodoItem: {
        text: ''
      },
    }
    this.getInitialTodos = this.getInitialTodos.bind(this);
  }
  componentDidMount() {

  }

  addTodo= (e) => {
     console.log('here');
    // const newTodo = this.state.newTodoItem
    // const updatedTodoItems = [...this.state.todoItems, newTodo]
    //     this.setState({
    //       todoItems: updatedTodoItems,
    //       newTodoItem: {
    //         text: ''
    //       },
    //     })
    // var data = {
    //   text: 'potato'
    // }
    //     console.log(updatedTodoItems);
    document.getElementById("newAdd").value='';
  }


  getInitialTodos = (e) => {
    var APIKey = "c1d50e-f554c3-89956a-90f947-7ca7ea";
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function()
      {
        if (this.readyState === 4 && this.status === 200) {
            console.log("GET response text:")
          var todos = JSON.parse(this.responseText);
          console.log(todos);
          if (todos.length>0){
            for(var i =todos.length-1; i>-1; i--){
              console.log(todos[i].text);

              const element = <Todo name={todos[i].text}/>;

              //
              // var newListItem = document.createElement("li");
              // var newCheckbox = document.createElement("input");
              // var newDelete = document.createElement("button");
              // var inverti = (i-todos.length)*(-1);
              //
              // var rawText=todos[i].text;
              //
              // newListItem.innerHTML = rawText;
              // newListItem.id= "todoListItem"+inverti;
              //
              // newCheckbox.setAttribute("type", "checkbox");
              // newCheckbox.id= "CheckboxItem"+inverti;
              //
              // newDelete.innerHTML = "Remove ToDo";
              // newDelete.id = "deleteItem" + inverti;
              //
              //
              // document.getElementById("todoList").append(newListItem);
              // document.getElementById("todoListItem"+inverti).append(newCheckbox);
              // document.getElementById("todoListItem"+inverti).append(newDelete);
              //
              // if((todos[i].completed)===true){
              // newCheckbox.checked = true;
              // var element = document.getElementById("todoListItem"+inverti);
              // element.classList.add("struckthrough");
              //
              // }
              // var styling = document.getElementById("todoListItem"+inverti);
              // styling.classList.add("textstyling");

              // let length = JSON.stringify(todos[i].id).length;
              // let p = inverti;
              // let currentId = JSON.stringify(todos[i].id).substring(1,length-1);
              // let currentBoolean=(todos[i].completed);

              // document.getElementById("CheckboxItem"+inverti).addEventListener("click", function(){ decideTF(p,currentId); });
              // document.getElementById("deleteItem"+inverti).addEventListener("click", function(){ deletePost(p,currentId); });

            }

          }
        }
        else if (this.readyState === 4){
          console.log(this.responseText);
        }


      };

      xhttp.open("GET", "https://cse204.work/todos", true);
      xhttp.setRequestHeader("x-api-key",APIKey);
      xhttp.send();

  }



render() {
return(
  <div className = "body">

    <div className="text-center">
    <h1>
    Nick's Todo List
    </h1>
    </div>

    <div id = "listContainer">
    <div class="row">


    <div class="col-sm-4" id="empty">
    </div>



    <div class="col-sm-4" id="full">

    <ol id="todoList">
    <Todo name="Todo Item 1" />
    <Todo name="Todo Item 2" />
    <Todo name="Todo Item 3" />

    </ol>

    </div>
    </div>



    <div class="row">
    <div class="col-sm-4" id="empty">
    </div>

    <div class="col-sm-4" id="notempty">
    <
    NewTodo addTodo = {
      this.addTodo
    }/>
    </div>

    </div>
    </div>
    </div>

);




}

}

export default App;

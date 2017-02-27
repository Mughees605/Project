var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');
import * as Redux from "react-redux"
import * as actions from "actions"

import TodoList from 'TodoList'
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export var TodoApp = React.createClass({
  onLogout(e){
    var {dispatch} = this.props
      e.preventDefault();
      dispatch(actions.startLogout()) 
  },
  render(){
    return (
      <div>
        <div>
            <button onClick = {this.onLogout}>Logout</button>
          </div>
        <h1 className = "jubmotron">Todo App</h1>
        
          
            <div >
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
    )
  }
});

export default Redux.connect()(TodoApp)
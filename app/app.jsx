var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import TodoApp from "TodoApp"
//import * as firebase from "firebase"
import firebase from "app/firebase/"
import Login from "Login"


firebase.auth().onAuthStateChanged((user)=>{

  
   if(user){
         hashHistory.push("/todos");
         store.dispatch(actions.login(user.uid)) 
         console.log(user.uid); 
         store.dispatch(actions.startAddTodos());

   }
   else{
     store.dispatch(actions.logout())
     hashHistory.push("/")
   }
})
store.dispatch(actions.startAddTodos());

ReactDOM.render(
  <Provider store={store}>
    <Router history= {hashHistory}>

      <Route path = "/">
      <Route path = "todos" component = {TodoApp}/>
      <IndexRoute component = {Login}/>
      </Route>

    </Router>
  </Provider>,
  document.getElementById('app')
);

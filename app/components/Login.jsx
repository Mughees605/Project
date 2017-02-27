import React from "react"
import * as Redux from "react-redux"
import * as actions from "actions"

export var Login = React.createClass({
    onLogin(){
       var {dispatch} = this.props
       dispatch(actions.startLogin());
    },
    render:function(){
        return (
            <div id = "login">
                <button className = "btn btn-block btn-primary" onClick= {this.onLogin}>SIGN IN WITH GITHUB</button>
            </div>
        )
    }
})
export default Redux.connect()(Login)
import React, { Component } from 'react'
import '../stylesheets/login.css'

export default class login extends Component {
    render() {
        return (
            <div>
                <div className="login-left">
                    <img src="confetti.jpg" alt="Bazzinga background"/>
                </div>
                <div className="login-container">
                    <h2 className="login-title" style={{'marginBottom':'100px'}}>Get Ready to Bazzingaa</h2>
                    <div className="login-form">
                        <h2 className="login-title">Login</h2>
                        <input type="text" name="username" placeholder="What do we call you?"/>
                        <input type="password" name="password" placeholder="Your Secret Magic Word"/>
                        <div className="btn-group">    
                            <a href="#"><button className="btn-login">Forgot password</button></a>    
                            <a href="#"><button className="btn-login">Sign Up</button></a>    
                        </div>
                        <a href="#"><button className="btn">Sign In</button></a>    
                    </div>
                </div>

            </div>
        )
    }
}

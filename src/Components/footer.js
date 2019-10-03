import React, { Component } from 'react'
import '../stylesheets/footer.css'
export default class footer extends Component {
    render() {
        return (
            <div className="footer" id="footer">
                <div className="footer-left">
                    <h6 className="heading">Contact Us</h6> 
                    <p> Phone : <span style={{'fontWeight':'500','fontSize':'18px'}}>9080658117</span></p>
                    <p> Address : <span style={{'fontWeight':'500','fontSize':'18px'}}>22 Balfour Road</span></p>
                    <p> Email : <span style={{'fontWeight':'500','fontSize':'18px'}}>bebuzzed@bazzinga.com</span></p>
                </div>
                <div className="footer-right">
                    <h6 className="heading">We would love to hear from you</h6>
                    <input type="text" name="message" style={{'width':'30%','marginLeft':'250px'}} placeholder="Message"/>
                </div>
                <div className="footer-bottom">
                    <img className="logo-footer"src="bazzingaH.png" alt="Logo"/>
                </div>
            </div>
        )
    }
}

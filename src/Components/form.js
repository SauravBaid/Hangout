import React, { Component } from 'react'
import '../stylesheets/form.css'

export default class form extends Component {
    render() {
        return (
            <div style={{marginBottom:'20px'}}>
                <div style={{'width':'48%','display':'inline-block'}}>
                    <img src="blueRobot.jpg" alt="Static event" width="100%"/>
                </div>
                <div style={{'width':'48%',float:'right'}}>
                <h2 className="heading title" id="form" style={{'marginTop':'40px'}}>Give us the details</h2>
                    <div style={{"paddingLeft":'100px'}}>
                        <form action="#">
                            <label className="placeholder">Name of the event</label>
                            <input type="text" name="eventName" id="eventName" placeholder="Eg. Big Bash's Birthday"/>
                            <label style={{color:'#636e72', fontWeight:'600'}}>Theme</label><br/>
                            <label>
                                <input type="checkbox" name="theme1" id="theme1"/>Party
                                <input type="checkbox" name="theme2" id="theme2"/>Hangout
                                <input type="checkbox" name="theme3" id="theme3"/>Wedding
                                <input type="checkbox" name="theme4" id="theme4"/>Sesh1
                                <input type="checkbox" name="theme5" id="theme5"/>Custom
                            </label>
                            {true?(
                                <input type="text" name="customTheme" id="customTheme" placeholder="Custom theme"/>
                            ):null}
                            <label className="placeholder">Location</label>
                            <input type="text" name="location" id="location" placeholder="Eg. Chennai, Mumbai, NewYork"/>
                            <label style={{color:'#636e72', fontWeight:'600'}}>Date of the event</label><br/>
                            <label className="placeholder" htmlFor="Start Time">Start Time</label>
                            <input type="date" name="date" id="date" placeholder='Start Date'/>
                            <label className="placeholder" htmlFor="End Time">End Time</label>
                            <input type="date" name="date" id="date" placeholder='End Date'/>
                            <label className="placeholder" htmlFor="Description">Description</label>
                            <input type="textarea" name="description" id="description" placeholder='Description' style={{height:'40px'}}/>
                            <label htmlFor="Type of event" className="placeholder">Type of event</label><br></br>
                            <label htmlFor="public">
                                <input type="radio" name="type" id="public" value="public" />
                                Public
                            </label>
                            <label htmlFor="private">
                                <input type="radio" name="type" id="private" value="private" />
                                Private
                            </label>
                            {true?(
                                <div>
                                    <label className="placeholder" htmlFor="number">Maximum number of people</label>
                                    <input type="number" name="number" id="number" placeholder='Whats your limit?'/>
                                </div>
                            ):null}
                        </form>
                        <div className="btn-wrapper">
                            <button className="btn" style={{'position':'absolute','top':'50px',left:'50px','transform':'translate(-50%,-50%)'}}>Let it Rippp</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

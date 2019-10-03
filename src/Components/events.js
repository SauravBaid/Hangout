import React, { Component } from 'react'
import "../stylesheets/events.css"
import Navbar from './navbar'

export default class events extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h2 className="title events-heading">Events Around you</h2>
                <div className="events">
                    <div className="event">
                        <img src="hashImage.jpg" alt="Event Theme"/>
                        <div className="card-content">
                            <h3 className="events-heading" style={{display:'inline-block'}}>Event title</h3>
                            <span className="event-small" style={{float:"right"}}>28<sup>th</sup>June 2020</span>
                            <span style={{display:"block",marginBottom:"10px"}}>Location: <span className="event-small" style={{'fontSize':'16px'}}>Chennai Rooftop</span></span>
                            <span style={{color:'rgba(10,10,10)'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Excepturi magnam reiciendis minima fugiat nam qui, veniam laborum.
                            </span>
                        </div>
                    </div>
                    <div className="event">
                        <img src="hashImage.jpg" alt="Event Theme"/>
                        <div className="card-content">
                            <h3 className="events-heading" style={{display:'inline-block'}}>Event title</h3>
                            <span className="event-small" style={{float:"right"}}>28<sup>th</sup>June 2020</span>
                            <span style={{display:"block",marginBottom:"10px"}}>Location: <span className="event-small" style={{'fontSize':'16px'}}>Chennai Rooftop</span></span>
                            <span style={{color:'rgba(10,10,10)'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Excepturi magnam reiciendis minima fugiat nam qui, veniam laborum.
                            </span>
                        </div>
                    </div>
                    <div className="event">
                        <img src="hashImage.jpg" alt="Event Theme"/>
                        <div className="card-content">
                            <h3 className="events-heading" style={{display:'inline-block'}}>Event title</h3>
                            <span className="event-small" style={{float:"right"}}>28<sup>th</sup>June 2020</span>
                            <span style={{display:"block",marginBottom:"10px"}}>Location: <span className="event-small" style={{'fontSize':'16px'}}>Chennai Rooftop</span></span>
                            <span style={{color:'rgba(10,10,10)'}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Excepturi magnam reiciendis minima fugiat nam qui.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

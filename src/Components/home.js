import React, { Component } from 'react'
import "../stylesheets/home.css"
import Form from './form'
import Navbar from './navbar'
import Footer from './footer'

export default class home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <img className="landingImage" src="parallax-scrolling-parallax-effect-parallax-websites-header.png" 
                        alt="Background image"  width='100%'/>
                        <div className="centered">
                            <h6 className="centeredSubtitle">event website</h6>
                            <h3 className="centeredTitle"><span className="title">Bazzinga</span></h3>
                            <span className="centeredContent">
                                A one-stop solution for all the happening events in your city.
                                Just log in and Bazzinga !!!
                            </span>
                            <button className="btn">Slide In</button>
                        </div>  
                </div>
                <div className="cardContainer" style={{backgroundImage:'url("white-triangle.jpg")'}}>
                    <h2 className="title heading" id='home'>How it works</h2>
                    <h6 className="heading" style={{'color':'#777777'}}>Hover over the confetti to know your moves</h6>
                    <div className="card">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="confetti.jpg" alt="Avatar" style={{ 'height':'100% ', 'width':'100%'}} />
                                </div>
                                <div className="flip-card-back">
                                    <h1>Create Your Event</h1> 
                                    <p>Have a plan coming up? Dificult to coordinate on whatsapp group? We got your back ;). <span style={{fontWeight:600, display:'block'}}>Create your own customised events.</span></p> 
                                    <p className="caption">In love with us? We are too</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="yellowAesthetic.jpg" alt="Avatar" style={{ 'height':'100% ', 'width':'100%'}} />
                                </div>
                                <div className="flip-card-back">
                                    <h1>Invite Friends</h1> 
                                    <p>Different group for different event. Tired of Gatecrashers. We all have been there.<span style={{fontWeight:600, display:'block'}}>Make a private event and invite those you want.</span> As once a great man told the more the merrier.</p> 
                                    <p className="caption">We love company</p>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="hashImage.jpg" alt="Avatar" style={{ 'height':'100% ', 'width':'100%'}} />
                                </div>
                                <div className="flip-card-back">
                                    <h1>Make connections</h1> 
                                    <p>
                                        Nothing like finding connections with strangers and making lifetime memories.
                                        <span style={{fontWeight:600, display:'block'}}> Make your event public so that strangers can check it out and attend.</span> 
                                    </p> 
                                    <p className="caption">Make friends. Not War</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form />
                <Footer />
            </div>
        )
    }
}

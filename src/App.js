import React from 'react';
// import Navbar from './Components/navbar'
import Home from './Components/home'

import Event from './Components/events'
import { Switch,BrowserRouter as Router, Route } from 'react-router-dom'
import login from './Components/login';
import form from './Components/form';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/event" component={Event} />
          <Route exact path="/login" component={login} />
          <Route exact path="/create" component={form} />
          <Route path="/" component={Home} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

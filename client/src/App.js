import React, { Component } from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Home from './views/Home.js'
import Login from './views/Login.js'

class App extends Component {

  state = {
    currentUser: null 
  }

  render() {
    return (
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/vip">VIP</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/logout">Log Out</Link>
        </div>

        <Switch>
            <Route path="/login" render={() => {
                return <Login />
            }} />
            <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;

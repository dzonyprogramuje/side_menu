import React from 'react'
import './App.css'
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          {/* <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

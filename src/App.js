/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <Link className="logo" to="/">
              Math Magicians
            </Link>
            <ul>
              <li>
                <Link to="/math-magicians">Home</Link>
              </li>
              <li>
                <Link to="/math-magicians/calculator">Calculator</Link>
              </li>
              <li>
                <Link to="/math-magicians/quote">Quote</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/math-magicians/calculator">
              <Calculator />
            </Route>
            <Route path="/math-magicians/quote">
              <Quote />
            </Route>
            <Route exact path="/math-magicians">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

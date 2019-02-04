import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from '../Home';
import Projects from '../Projects';
import APPM from '../Projects/APPM';


class App extends Component {
  render() {
    return (
      <div className="App scanlines">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/projects/appm' component={APPM} />
          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}
export default App;
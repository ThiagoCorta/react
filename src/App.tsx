import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './components/home/HomeComponent';
import { NavComponent } from './components/nav/NavComponent';
import { PersonComponent } from './components/person/PersonComponent';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavComponent />
        <Switch>
          <Route path='/' exact component={HomeComponent}></Route>
          <Route path='/person/:id' exact component={PersonComponent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

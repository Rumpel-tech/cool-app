import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import Profile from './components/Profile';
import Help from './components/Help';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/profile" component={Profile} />
          <Route path="/help" component={Help} />
          <Route path="/" exact component={() => <h1>Welcome to My Cool App</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
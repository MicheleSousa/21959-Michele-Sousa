import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AlertPage from './pages/AlertPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/alert" component={AlertPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Router>
          {/* <Navbar /> */}
          <div className="container">
            <Switch>
              <Route exact path="/" component={UserForm} />
              <Route exact path="/menuler" component={menu} />
              <Route exact path="/odeme" component={Payment} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;

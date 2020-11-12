import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.scss';
import Login from './view/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="login">1111</Link>
        <Route path="/login" component={Login}/>
      </Router>
    </div>
  );
}

export default App;

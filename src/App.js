import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Led from './pages/Led';
import Phone from './pages/Phone';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/phone' component={Phone} />
          <Route path='/Led' component={Led} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

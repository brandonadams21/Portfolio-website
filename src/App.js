import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';

function App() {  
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

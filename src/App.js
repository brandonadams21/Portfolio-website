import React from 'react';
import { useEffect } from "react";
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/pages/Blog';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Skills from './components/pages/Skills'
import About from './components/About';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/projects' component={Projects} />
          <Route path = '/contact' component={Contact} />
          <Route path = '/skills' component={Skills} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

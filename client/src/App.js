import React, { Component } from 'react';
import Hero from './Components/layout/Hero';
import Navbar from './Components/layout/Navbar';
import Policy from './Components/pages/Policy';
import Contact from './Components/pages/Contact';
import Footer from './Components/layout/Footer';
import Search from './Components/pages/Search';
import Saved from './Components/pages/Saved';
import Home from './Components/pages/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>


        <Hero />
        <Navbar />

        <Route path="/" exact={true} component={Home} />
        <Route path="/policy" exact={true} component={Policy} />
        <Route path="/search" exact={true} component={Search} />
        <Route path="/favorites" exact={true} component={Saved} />
        <Route path="/contact" exact={true} component={Contact} />

        <Footer />


      </Router>
    );
  }
}

export default App;
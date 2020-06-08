import React from 'react';
import NavbarTop from './Components/layout/NavbarTop';
import Hero from './Components/layout/Hero';
import Navbar from './Components/layout/Navbar';
import Policy from './Components/pages/Policy';
import Contact from './Components/pages/Contact';
import Footer from './Components/layout/Footer';
import Login from './Components/pages/Login';
import Login2 from './Components/Login2';
import Home from './Components/pages/Home';
import Todos from './Components/pages/Todos';
import Register from './Components/pages/Register';
import Admin from './Components/pages/Admin';
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavbarTop />
      <Hero />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/policy" component={Policy} />
      <UnPrivateRoute path="/login" component={Login} />
      <UnPrivateRoute path="/login2" component={Login2} />
      <UnPrivateRoute path="/register" component={Register} />
      <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      <Footer />
    </Router>
  );
}

export default App;

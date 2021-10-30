import React from "react";

import Footer from "./components/Footer/footer";
import Navbar from "./components/Navbar/navbar";

import landingpages from "./pages/landingpage";
import DabbaDelivery from "./pages/DabbaDelivery";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={landingpages}/>
          <Route path='/dabbadelivery' exact component={DabbaDelivery}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/login' exact component={Login}/>
          
        </Switch>
       <Footer/>
      </Router>
    </>
  );
}

export default App;

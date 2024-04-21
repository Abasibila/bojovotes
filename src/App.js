import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Components/Home"
import CreateEvent from './Components/CreateEvent';
import Login from './Components/Login';
import CreateAward from './Components/CreateAward';
import Award from './Components/Award';
import Events from './Components/Events';
import Event from './Components/Event';

import { useSelector } from 'react-redux';


import { selectUserName } from "./features/Users/userSlice";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ForgetPassword from './Components/ForgetPassword';

 function App() {

  const userName = useSelector(selectUserName);

  return (
    <div className="App">
    <Router>
      {/* //change to userName exist */}
     { userName ? (
        <Login />) :
      <>
        <Header />
         <Switch>
        <Route path="/createevent">
            <CreateEvent />
        </Route>
        <Route path="/createaward">
            <CreateAward />
        </Route>
        <Route path="/events">
            <Events />
        </Route>
        <Route path="/event">
            <Event />
        </Route>
        <Route path="/award">
            <Award />
        </Route>
        <Route path="/forgetpassword">
            <ForgetPassword />
        </Route>
        <Route path="/">
           <Home />
        </Route>
      </Switch>
      </>
 }
      <Footer />
    </Router>
    </div>
  );
}

export default App;
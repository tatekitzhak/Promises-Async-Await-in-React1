import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideBar from './sideBar';

import Home from './pages/home';
import About from './pages/about';
import Users from './pages/users';
import Login from './pages/login';


function MainSideBar2() {


  return (
    <>
      <Router>
        <div >
            <div className="border-end bg-white">
                <div className="sidebar-heading border-bottom bg-light text-center">
                  <h1>Side Bar 2 </h1>
                  <SideBar/>
                </div>

            </div>
            {
              // <Switch>
              //   <Route exact path="/side-bar-2/" component={Home} />
              //
              //   <Route exact path="/side-bar-2/:id" render={(props) => (<About {...props} post="Posts"/>)} />
              // </Switch>
          }

            <Switch>
              <Route exact path="/side-bar-2" component={Home} />
              <Route exact path="/side-bar-2/about" component={About} />
              <Route exact path="/side-bar-2/users" component={Users} />
              <Route exact path="/side-bar-2/login" component={Login} />
            </Switch>
        </div>
      </Router>
    </>
  );
};


export default MainSideBar2;

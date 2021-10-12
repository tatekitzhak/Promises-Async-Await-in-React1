import React, {useState, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


  function NavigationBar() {
    const navLinks = [{
                        path: '/',
                        name: 'Home',
                      }, {
                        path: '/about',
                        name: 'About',
                      }, {
                        path: '/users',
                        name: 'Users',
                      }, {
                        path: '/login',
                        name: 'Login',
                      }];

    return (
      <>
        <div id="sidebar-wrapper">
            <div className="border-end bg-white">
                <div className="sidebar-heading border-bottom bg-light">
                  <h1>Navigation Bar Task 2 </h1>
                </div>
                <div className="list-group list-group-flush">

                  {
                      navLinks.map(({path, name}, key) => {
                        return (
                                <Link className="list-group-item list-group-item-action list-group-item-light p-3"
                                      key={key}
                                      to={{
                                            pathname:`/side-bar-2${path}`
                                            }}>
                                  {name}
                                </Link>
                              )
                            })
                  }
                </div>
            </div>
        </div>
      </>
    );
  };


  export default NavigationBar;

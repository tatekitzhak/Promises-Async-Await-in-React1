import React, {useState, useReducer, createContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Reducer1 from './reducer1';
import Reducer2 from './reducer2';


function MainTask5() {
  return (
    <>
      <Router>
          <div className="text-center">
            <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light text-center">
                <h1>Task 5</h1>

              </div>
            </div>
              <Reducer1/>
          </div>
      </Router>
    </>
  );
};


export default MainTask5;

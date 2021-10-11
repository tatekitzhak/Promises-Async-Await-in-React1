import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideBar from './sideBar';

function Container() {

  return(
    <Router>
      <div className="row">

        <div className="col-md-3 pull-md-right">

            <SideBar/>

        </div>

        <div className="col-md-8 pull-md-right border">
        <h1>Container</h1>
          {/*<Switch>
            <PageProvider>

              <Route path="/side-bar/:link"
                     exact
                     component={MainPage} />

            </PageProvider>
          </Switch>*/}

        </div>

      </div>
    </Router>
  );

};

export default Container;

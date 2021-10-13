import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,useLocation, useParams} from "react-router-dom";
import {SidebarProvider, PageProvider} from './dataContext';
import {ContentProvider, ContentContext} from './data_management/contentContext';

import Content from './content';
import NavigationBar from './navBarTask1';
import Item from './pages/item';



function MainTask1() {


  return(
    <Router>
      <div className="row">

        <div className="col-md-3 pull-md-right">
          <SidebarProvider>
            <NavigationBar/>
          </SidebarProvider>
        </div>

        <div className="col-md-8 pull-md-right border">
          <Switch>
            <PageProvider>
              <ContentProvider>

                <Route exact path="/side-bar-1"
                             render={(props) => <Content {...props} title={`Props through render (PropsPage)`}  name={'Ran'}/>} />

                <Route exact path="/side-bar-1/:link"
                             component={(props) => <Item {...props} title={"abc"}/> }/>

              </ContentProvider>

            </PageProvider>
          </Switch>
        </div>

      </div>
    </Router>
  );

};

export default MainTask1;

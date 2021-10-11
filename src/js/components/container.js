import React, { Component } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header";
import Home from "./home" ;
import TableFileFormats from "./tableFileFormats";

import SideBarApp from './side_bar/sideBarApp';
import MainSideBar2 from './side_bar_2/main';
import ContactUs from './contact';
import Sitemap from './site_map/sitemap';
import Nav from './site_map/nav';

import NBAPlayer from "./nba_players/nbaPlayer";
import Footer from "./footer";


 function Container() {
    return (
    <>
      <BrowserRouter >
          <Header linkDatat={"value"}/>

          <div className="navbar container-fluid"> </div>
          <div className="contentWrapper container-fluid">
            <div className="content border ">
              <Switch>
                  <Route path="/"  exact component={Home} />
                  <Route path="/contact-us" component={ContactUs}/>

                  <Route path="/Task-1" component={SideBarApp}/>

                  <Route path="/Task-2" component={MainSideBar2}/>
                  <Route path="/Task-3" component={Nav}/>

                  {/*<Route path="/Task-2" component={()=> <Sitemap  authorized={false}/>} />*/}

                  <Route path="/Task-4"  exact component={NBAPlayer}/>

              </Switch>
            </div>
          </div>

      </BrowserRouter>
      <Footer/>
    </>
    );

}


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;

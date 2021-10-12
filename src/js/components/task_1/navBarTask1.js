import React, {useState, useContext} from 'react';
import {CategoriesContext} from './dataContext';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function NavigationBar(){
  const [categories, setCategories] = useContext(CategoriesContext);

  const dispatcher = (event) =>{
     //event.preventDefault();
      //console.log("SideBar:", event.target.dataset.txt);
  }

  return (
    <>
      <div id="sidebar-wrapper">
          <div className="border-end bg-white">
              <div className="sidebar-heading border-bottom bg-light">
                <h1>Navigation Bar Task 1</h1>
              </div>
              <div className="list-group list-group-flush">
                {
                  categories.map((value, index)=>{
                      return (
                          <Link className="list-group-item list-group-item-action list-group-item-light p-3"
                                data-txt={`${value.categorie}`}
                                onClick={dispatcher}
                                // to={`/side-bar/${value.categorie}`}
                                key={index}
                                to={{
                                      pathname:`/side-bar-1/${value.categorie}`,
                                      state: { fromNotifications: true,
                                               name: "Ran"
                                             }
                                      }}>
                          {value.categorie}
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

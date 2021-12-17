import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { HomepageBanner } from "./home/HomepageBanner";

export const GraphicsBayTracker = () => {
  return ( <>
    <Route 
      render={() => {
  
        if (localStorage.getItem("graphicsbaytracker_customer")) {
          return (
            <>
             <HomepageBanner />
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return( <Redirect to="/login" />
          );
      }}}
       />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)};

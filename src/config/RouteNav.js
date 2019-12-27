import React from "react";
import { Route, Link, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import TopHeadLines from "../pages/TopHeadlines";

function RouteNav() {
  return (
    <BrowserRouter>
      <Redirect exact from="/" to="home" />
      <Route path="/home" component={Home} />
      <Route path="/topheadlines/:id" component={TopHeadLines} />
    </BrowserRouter>
  );
}
export default RouteNav;

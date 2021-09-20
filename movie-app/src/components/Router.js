import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Movie from "./Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact></Route>
        <Route path="/movie/:id" component={Movie}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

import React from "react";
import { Route, Switch } from "react-router-dom";
import { RentalSec } from "../Components/RentalSec/RentalSec";
import Dashboard from "../Pages/Dashboard/Dashboard";
const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/cars">
          <RentalSec />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };

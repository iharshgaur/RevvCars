import React from "react";
import { Route, Switch } from "react-router-dom";
import { RentalSec } from "../Components/RentalSec/RentalSec";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Open from "../Pages/Dashboard/Open";
import { CarsDesc } from "../Components/RentalSec/CarsDesc";
import { Booking } from "../Components/RentalSec/Booking";

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
        <Route exact path="/open">
          <Open />
        </Route>
        <Route exact path="/cars">
          <CarsDesc />
        </Route>
        <Route exact path="/bookcars">
          <Booking />
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };

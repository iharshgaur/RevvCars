import React from "react";
import { Route, Switch } from "react-router-dom";
import { CarsDesc } from "../components/RentalSec/CarsDesc";
import { RentalSec } from "../components/RentalSec/RentalSec";
import { Booking } from "../components/RentalSec/Booking";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <RentalSec />
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

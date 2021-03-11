import React from "react";
import { Route, Switch } from "react-router-dom";
import { RentalSec } from "../Components/RentalSec/RentalSec";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Open from "../Pages/Dashboard/Open";
import { CarsDesc } from "../Components/RentalSec/CarsDesc";
import { Booking } from "../Components/RentalSec/Booking";
import { PrivateRoute } from "./PrivateRoute";
import { SubscriptionPage } from "../Pages/subscription/MainPart/SubscriptionPage";
import Profile from "../Pages/Profile/Profile";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/open">
          <Open />
        </Route>
        <PrivateRoute exact={true} path="/cars">
          <RentalSec />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/cars">
          <CarsDesc />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/bookcars">
          <Booking />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/subscription/:location">
          <SubscriptionPage />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/profile">
          <Profile />
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export { Routes };

import React from "react";
import { Route, Switch } from "react-router-dom";
import { RentalSec } from "../Components/RentalSec/RentalSec";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <RentalSec />
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };

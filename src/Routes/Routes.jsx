import React from "react";
import { Route, Switch } from "react-router-dom";
import { RentalSec } from "../Components/RentalSec/RentalSec";
import { SubscriptionPage } from "../Pages/subscription/MainPart/SubscriptionPage";
import { Payment } from "../Pages/SubscriptionPay/MainPage/Payment";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <RentalSec />
        </Route>
        <Route exact path="/subscription">
          <SubscriptionPage/>
        </Route>
        <Route exact path="/subpay/:id">
          <Payment/>
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };

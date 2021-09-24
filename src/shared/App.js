import React from "react";
import Header from "components/Header";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "redux/configureStore";

const App = () => {
  return (
    <>
      <Header />
      <ConnectedRouter history={history}>
        <Switch>
          <Route />
        </Switch>
      </ConnectedRouter>
    </>
  );
};

export default App;

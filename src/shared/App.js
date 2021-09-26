import React from "react";
import Header from "components/Header";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import { history } from "redux/configureStore";
import { createGlobalStyle } from "styled-components";
import Home from "pages/Home";
import New from "pages/New";
import Men from "pages/Men";
import Women from "pages/Women";
import Kids from "pages/Kids";
import Sale from "pages/Sale";
import Detail from "pages/Detail";
import "fonts/App.css";
import Carts from "pages/Carts";
import Footer from "components/Footer";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/new" exact component={New} />
          <Route path="/category/men" exact component={Men} />
          <Route path="/category/women" exact component={Women} />
          <Route path="/category/kids" exact component={Kids} />
          <Route path="/category/sale" exact component={Sale} />
          <Route path="/product/:id" exact component={Detail} />
          <Route path="/cart" exact component={Carts} />
        </Switch>
      </ConnectedRouter>
      <Footer />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
      body {
        margin: 0px;
        padding: 0px;
      }
    `;

export default App;

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Items } from "../pages/Items";
import { ItemDetail } from "../pages/ItemDetail";
import Layout from "../components/Layout";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/:id" component={ItemDetail} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

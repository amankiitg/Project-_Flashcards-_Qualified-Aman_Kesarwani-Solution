import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Deck from "./Deck";
import CreateDeck from "./CreateDeck";
import Home from "./Home";

import { Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;

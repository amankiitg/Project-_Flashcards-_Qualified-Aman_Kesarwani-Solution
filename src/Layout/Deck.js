import React from "react";
import { Route, Switch, useParams, useRouteMatch, Link, } from "react-router-dom";
import EditDeck from "./EditDeck";
import DeckStudy from "./DeckStudy";
import DeckView from "./DeckView"
import Card from "./Card"

function Deck() {
  const { deckId } = useParams();
  const { path, url } = useRouteMatch(); 

  return (
    <section>
      <Switch>
        <Route path={`${path}/edit`}>
          <EditDeck />
        </Route>
        <Route path={`${path}/study`}>
          <DeckStudy />
        </Route>
        <Route path={`${path}/cards`}>
          <Card />
        </Route>
        <Route path={`${path}`}>
          <DeckView />
        </Route>
      </Switch>
    </section>
  );
}

export default Deck;
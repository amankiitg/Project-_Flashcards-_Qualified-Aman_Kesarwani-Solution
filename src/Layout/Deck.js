import React from "react";
import { Route, Switch, useParams, useRouteMatch, Link, } from "react-router-dom";
// import DeckProfile from "./DeckProfile";
import EditDeck from "./EditDeck";
import DeckStudy from "./DeckStudy";
import DeckView from "./DeckView"

function Deck() {
  const { deckId } = useParams();
  const { path, url } = useRouteMatch(); 

  return (
    <section>
      <Switch>
        <Route path={"/decks/:deckId/edit"}>
          <EditDeck />
        </Route>
        <Route path={"/decks/:deckId/study"}>
          <DeckStudy />
        </Route>
        <Route path={"/decks/:deckId"}>
          <DeckView />
        </Route>
      </Switch>
    </section>
  );
}

export default Deck;
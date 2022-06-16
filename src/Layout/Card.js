import React from "react";
import { Route, Switch, useParams, useRouteMatch, Link, } from "react-router-dom";
import EditCard from "./EditCard";

function Card() {
  const { cardId } = useParams();
  const { path, url } = useRouteMatch(); 

  return (
    <section>
      <Switch>
        <Route path={"/decks/:deckId/cards/:cardId/edit"}>
          <EditCard />
        </Route>
        <Route path={"/decks/:deckId/cards/new"}>
          <EditCard />
        </Route>
      </Switch>
    </section>
  );
}

export default Card;
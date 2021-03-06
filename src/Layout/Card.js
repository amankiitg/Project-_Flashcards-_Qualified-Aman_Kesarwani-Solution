import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import EditCard from "./EditCard";
import AddCard from "./AddCard";

function Card() {
  
  const { path, url } = useRouteMatch(); 
  console.log('In Card', 'Path', path, 'URL', url);

  return (
    <section>
      <Switch>
        <Route path={"/decks/:deckId/cards/:cardId/edit"}>
          <EditCard />
        </Route>
        <Route path={"/decks/:deckId/cards/new"}>
          <AddCard />
        </Route>
      </Switch>
    </section>
  );
}

export default Card;
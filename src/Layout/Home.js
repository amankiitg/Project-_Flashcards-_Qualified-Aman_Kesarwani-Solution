import React, { useEffect,useState } from "react";
import { Route, Switch, useParams, useRouteMatch, Link, } from "react-router-dom";
import { listDecks } from "../utils/api";
import DeckList from "./DeckList"

function Home() {

  const [decks, setDeck] = useState([]);
  useEffect(() => {    

      // const abortController = new AbortController();
      listDecks().then((deckFromAPI) => {
        setDeck(deckFromAPI);

      }).catch((error) => {
        if (error.name === "AbortError") {
          // Ignore `AbortError`
          console.log("Aborted");
        } else {
          throw error;
        }
      });
      console.log('Decks',decks);
  },[decks.id]);

    return (
        <div>
            <Link to={`/decks/new`}><button className="btn btn-secondary">+ Create Deck</button></Link>
            <br />
            <DeckList decks={decks} setDeck={setDeck}/>
        </div>
    );
}

export default Home;
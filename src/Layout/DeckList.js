import React from "react";
import { useHistory, Link, useParams  } from "react-router-dom";
import DeckProfile from "./DeckProfile";
import { deleteDeck, listDecks } from "../utils/api";


export const DeckList = ({ decks = [], setDeck={setDeck}}) => {
  
  const history = useHistory();
    
  const handleDelete = async (id) => {
      const result = window.confirm("Delete this deck?");
      if (result) {
        deleteDeck(id).then(() => {
          listDecks().then((deckFromAPI) => setDeck(deckFromAPI));
        });
        // TODO: After the post is deleted, send the user to the home page.
        history.push("/");
      }
  };

    const rows = decks.map((deck) => (
      <DeckProfile key={deck.id} deck={deck} handleDelete={() => handleDelete(deck.id)}/>
    ));

    return (
      <section>
        {rows}
      </section>
    );
};

export default DeckList;

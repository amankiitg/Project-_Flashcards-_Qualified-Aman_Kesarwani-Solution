import React, { useState, useEffect, useHistory  }  from "react";
import { Link, useParams  } from "react-router-dom";
import CardForm from "./CardForm";
import { createCard, readDeck } from "../utils/api";
import { useRouteMatch } from "react-router-dom";

function AddCard() {

  const { deckId } = useParams();
  const { url } = useRouteMatch();

  const initialFormState = {
    front: "",
    back: "",
  };

  const [currentDeck, setCurrentDeck] = useState([]);

  useEffect(() => {    
    // const abortController = new AbortController();
    readDeck(deckId).then((deckFromAPI) => {
        setCurrentDeck(deckFromAPI);
    }).catch((error) => {
        if (error.name === "AbortError") {
        // Ignore `AbortError`
        console.log("Aborted");
        } else {
        throw error;
        }
    });
  },[deckId]);

  return (
      <section>
      <div>
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                  <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deckId}`}>{currentDeck.name}</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Add Card</li>
              </ol>
          </nav>
      </div>
      <h2>{currentDeck.name}: Add Card</h2>
      <CardForm initialFormState={initialFormState} cardFunction={createCard} navAftersubmit={url} navafterCancel={`/decks/${deckId}`}/>
      </section>
  )
}

export default AddCard;
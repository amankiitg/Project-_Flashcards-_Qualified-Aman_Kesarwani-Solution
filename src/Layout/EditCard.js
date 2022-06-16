import React, { useState, useEffect, useHistory  }  from "react";
import { Link, useParams  } from "react-router-dom";
import CardForm from "./CardForm";
import { updateCard, readDeck, readCard } from "../utils/api";
import { useRouteMatch } from "react-router-dom";

function EditCard() {

  const { deckId, cardId } = useParams();

  const [currentDeck, setCurrentDeck] = useState([]);
  const [currentCard, setCurrentCard] = useState([]);

  useEffect(() => {    
    // const abortController = new AbortController();
    readDeck(deckId).then((deckFromAPI) => {
        setCurrentDeck(deckFromAPI);
        //setCurrentCard(currentDeck.cards[cardId]);
    }).catch((error) => {
        if (error.name === "AbortError") {
        // Ignore `AbortError`
        console.log("Aborted");
        } else {
        throw error;
        }
    });
  },[deckId]);

  useEffect(() => {    
    // const abortController = new AbortController();
    readCard(cardId).then((deckFromAPI) => {
      setCurrentCard(deckFromAPI);
    }).catch((error) => {
        if (error.name === "AbortError") {
        // Ignore `AbortError`
        console.log("Aborted");
        } else {
        throw error;
        }
    });
  },[cardId]);

  console.log('deckId',deckId,'cardId',cardId)
  if(currentCard.id) {
    return (
        <section>
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deckId}`}>{currentDeck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card</li>
                </ol>
            </nav>
        </div>
        <h2>Edit Card: {cardId}</h2>
        <CardForm initialFormState={currentCard} cardFunction={updateCard} navAftersubmit={`/decks/${deckId}`} navafterCancel={`/decks/${deckId}`}/>
        </section>
    ) 
  } else {
    return <p>Edit Card Loading..</p>
  }
}

export default EditCard;
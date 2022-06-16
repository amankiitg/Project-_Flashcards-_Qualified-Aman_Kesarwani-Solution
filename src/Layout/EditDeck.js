import React, { useState, useEffect } from "react";
import { Link, useParams, useRouteMatch, useHistory} from "react-router-dom";
import { createDeck, readDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeck() {

  const { deckId } = useParams();
  const { path, url } = useRouteMatch(); 
  const history = useHistory();

  const [currentDeck, setCurrentDeck] = useState([]);

  useEffect(() => {    
      // const abortController = new AbortController();
      readDeck(deckId).then((deckFromAPI) => {
          setCurrentDeck(deckFromAPI);
          console.log('Result',deckFromAPI);
      })
      .catch((error) => {
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
                <li className="breadcrumb-item" aria-current="page"><Link to={url}>{currentDeck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
    </div>
    <h2>Edit Deck</h2>
    <DeckForm initialFormState={currentDeck}/>
    </section>
)
}

export default EditDeck;
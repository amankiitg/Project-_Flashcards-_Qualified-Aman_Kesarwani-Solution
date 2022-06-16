import React, { useState, useEffect } from "react";
import { Link, useParams, useRouteMatch, useHistory} from "react-router-dom";
import { updateDeck, readDeck } from "../utils/api";
import DeckForm from "./DeckForm";

function EditDeck() {

  const { deckId } = useParams();
  const { path, url } = useRouteMatch(); 

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


   if(currentDeck.id){
    return (
        <section>
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to={url}>{currentDeck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
                </ol>
            </nav>
        </div>
        <h2>Edit Deck</h2>
        <DeckForm initialFormState={currentDeck} deckFunction={updateDeck}/>
        </section>
        )
    } else{
        return <p>Edit Deck Loading..</p>
    }
    
}

export default EditDeck;
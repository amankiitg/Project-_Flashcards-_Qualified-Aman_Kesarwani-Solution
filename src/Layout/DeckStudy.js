import React, { useState, useEffect }  from "react";
import { Link, useParams } from "react-router-dom";
import {  readDeck } from "../utils/api";
import FlipCard from "./FlipCard";

function DeckStudy() {
    
    const { deckId } = useParams();
   
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

    // console.log('Path in deck study', currentDeck.cards);
    console.log('Cards set', currentDeck.cards);
    if(currentDeck.cards){
        return (
            <section>
              <div>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">Study</li>
                      </ol>
                  </nav>
              </div>
              <h2>{currentDeck.name}</h2>
              <FlipCard cards={currentDeck.cards} /> 
            </section>
          );
    }
    return <p>Loading..</p>
  }
  
  export default DeckStudy;
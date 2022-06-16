
import React, { useState, useEffect }  from "react";
import { useHistory, Link, useParams  } from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";
import classNames from "../utils/class-names" 
import CardFront from "./CardFront";
import CardBack from "./CardBack";

function FlipCard({ cards }) {

    const history = useHistory();
    
    const [currentCard, setCurrentCard] = useState(0);
    const [showBack, setShowBack] = useState(false);

    const handleClick = () => {
          setShowBack(!showBack);
    }

    const handleNext = () => {
        if(currentCard===cards.length-1){
            const reset = window.confirm("Restart cards?");
            if(reset) {
                setCurrentCard(0);
                setShowBack(false);
            } else{
                history.push("/");
            }
        } else {
            setCurrentCard((currentCard+1)%cards.length);
            setShowBack(false);
        } 
  }

    if(cards.length>2){
        if(!showBack){
            return <CardFront currentCard={currentCard} cards={cards} handleClick={handleClick}/> 
        } else{
            return <CardBack currentCard={currentCard} cards={cards} handleClick={handleClick} handleNext={handleNext}/> 
        }
    } else {
        return (
            <NotEnoughCards cards={cards} />
        );
    }
  }
  
  export default FlipCard;
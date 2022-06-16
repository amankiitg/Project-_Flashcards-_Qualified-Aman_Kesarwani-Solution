
import React, { useState, useEffect }  from "react";
import NotEnoughCards from "./NotEnoughCards";
import classNames from "../utils/class-names" 
import CardFront from "./CardFront";
import CardBack from "./CardBack";

function FlipCard({ cards }) {

    // console.log(cards.length);
    const [currentCard, setCurrentCard] = useState(0);
    const [showBack, setShowBack] = useState(false);

    const handleClick = () => {
          setShowBack(!showBack);
    }

    const handleNext = () => {
        setCurrentCard((currentCard+1)%cards.length);
        setShowBack(false);
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
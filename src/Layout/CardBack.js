import React from "react";

function CardBack({currentCard, cards, handleClick, handleNext}) {
    return (
        <div className="card back">
            <div className="card-body">
            <h5 className="card-title">Card {currentCard+1} of {cards.length}</h5>
            <p className="card-text fs-1 fw-bold">{cards[currentCard].back}</p>
            <button className="btn btn-secondary" onClick={handleClick}>Flip</button>
            <button className="btn btn-primary mx-2" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default CardBack;
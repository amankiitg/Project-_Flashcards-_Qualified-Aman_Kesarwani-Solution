import React from "react";

function CardFront({currentCard, cards, handleClick}) {
    return (
            <div className="card front">
                <div className="card-body">
                <h5 className="card-title">Card {currentCard+1} of {cards.length}</h5>
                <p className="card-text fs-1 fw-bold">{cards[currentCard].front}</p>
                <button className="btn btn-secondary" onClick={handleClick}>Flip</button>
                </div>
        </div>
        
    );
}

export default CardFront;
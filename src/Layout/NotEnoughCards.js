import React, { useState, useEffect }  from "react";
import { Route, Switch, useParams, useRouteMatch, Link, } from "react-router-dom";

function NotEnoughCards({cards = []}){

    const { deckId } = useParams();

    return (
        <div>
            <h3>
                Not enough cards.
            </h3>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck</p>
            <Link to={`/decks/${deckId}/cards/new`}><button className="btn btn-primary">+ Add Cards</button></Link>
        </div>
        
    )
}

export default NotEnoughCards;
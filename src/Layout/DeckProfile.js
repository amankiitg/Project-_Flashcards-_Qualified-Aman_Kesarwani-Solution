import React from "react";
import { Link  } from "react-router-dom";

export const DeckProfile = ({ deck = {}, handleDelete}) => {
  
    return (
        <div className="card my-2 w-75">
            <div className="card-body" key={deck.id}>
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</h6>
                <p className="card-text">{deck.description}</p>
                <Link to={`/decks/${deck.id}`}><button className="btn btn-secondary">View</button></Link>
                <Link to={`/decks/${deck.id}/study`}><button className="btn btn-primary mx-2">Study</button></Link>
                <button className="btn btn-danger float-right" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );

  
};

export default DeckProfile;

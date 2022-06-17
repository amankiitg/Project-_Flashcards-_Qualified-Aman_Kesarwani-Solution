import React from "react";
import { Link,  useRouteMatch  } from "react-router-dom";

export const CardProfile = ({ card = {}, handleDeleteCard}) => {

    const { url } = useRouteMatch(); 
  
    return (
        <div className="card my-2 w-75">
            <div className="card-body" key={card.id}>
                <p className="card-text">{card.front}</p>
                <p className="card-text">{card.back}</p>
                <Link to={`${url}/cards/${card.id}/edit`}><button className="btn btn-secondary">Edit</button></Link>
                <button className="btn btn-danger float-right" onClick={handleDeleteCard}>Delete</button>
            </div>
        </div>
    );

  
};

export default CardProfile;

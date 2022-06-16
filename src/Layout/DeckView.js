import React, { useState, useEffect }  from "react";
import { Link, useParams, useRouteMatch, useHistory} from "react-router-dom";
import { readDeck, deleteCard, listDecks, deleteDeck } from "../utils/api";
import CardProfile from "./CardProfile"

function DeckView() {

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

    const handleDeleteCard = async (id) => {
      const result = window.confirm("Delete this card?");
      if (result) {
        deleteCard(id).then(() => {
          readDeck(deckId).then((deckFromAPI) => setCurrentDeck(deckFromAPI));
        });
      }
    };

    const handleDelete = async () => {
      const result = window.confirm("Delete this deck?");
      if (result) {
        deleteDeck(deckId).then(() => {
          history.push("/");  
        }).catch((error) => {
          console.log('Could not delete in View model')
          console.log(error);
        });
      }
    };

    console.log('Path in deck study', path);
    //console.log('Cards set', currentDeck.cards);
    

    if(currentDeck.cards){
      const cardrows = currentDeck.cards.map((card) => (
        <CardProfile key={card.id} card={card} handleDeleteCard={() => handleDeleteCard(card.id)}/>
      ));
        return (
            <section>
              <div>
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                          <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                          <li className="breadcrumb-item active" aria-current="page">{currentDeck.name}</li>
                      </ol>
                  </nav>
              </div>
              <div className="my-2 w-75">
                  <h3>{currentDeck.name}</h3>
                  <p className="card-text">{currentDeck.description}</p>
                  <Link to={`/decks/${currentDeck.id}/edit`}><button className="btn btn-secondary">Edit</button></Link>
                  <Link to={`/decks/${currentDeck.id}/study`}><button className="btn btn-primary mx-2">Study</button></Link>
                  <Link to={`${url}/cards/new`}><button className="btn btn-primary mx-2">Add Cards</button></Link>
                  <button className="btn btn-danger float-right" onClick={handleDelete}>Delete</button>
              </div>
              <br />
              <br />
              <h3>Cards</h3>
              <div>
                {cardrows}
              </div>
            </section>
          );
    }
    return <p>Loading..</p>
  }
  
export default DeckView;


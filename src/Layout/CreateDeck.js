import React, { useState, useHistory  }  from "react";
import { Link } from "react-router-dom";
import DeckForm from "./DeckForm";
import { createDeck } from "../utils/api";

function CreateDeck() {

    const initialFormState = {
        name: "",
        description: "",
      };

    return (
        <section>
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
                </ol>
            </nav>
        </div>
        <h2>Create Deck</h2>
        <DeckForm initialFormState={initialFormState} deckFunction={createDeck}/>
        </section>
    )
  }
  
  export default CreateDeck;
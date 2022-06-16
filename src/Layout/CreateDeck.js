import React, { useState, useHistory  }  from "react";
import { Link } from "react-router-dom";
import { createDeck } from "../utils/api";

function CreateDeck() {
    // const { deckId } = useParams();
    // const { path, url } = useRouteMatch(); 
    // const history = useHistory();


    const initialFormState = {
        name: "",
        description: "",
      };

    const [formData, setFormData] = useState({ ...initialFormState });

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setFormData({ ...initialFormState });
        console.log("Submitting..", formData);

        // const abortController = new AbortController();

        const response = createDeck(formData);
        const savedData = await response;
        console.log("Saved user!", savedData);
        //history.push("/");
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
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    placeholder = "Deck Name"
                    onChange={handleChange}
                    value={formData.name}
                    />
            </div>
            <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea 
                className="form-control"
                rows="3"
                id="description"
                type="textarea"
                name="description"
                placeholder = "Brief description of the deck"
                onChange={handleChange}
                value={formData.description}
                />
            </div>
            
            <Link to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
            <button type="submit" className="btn btn-primary mx-3">Submit</button>
        </form>        
      </section>
    );
  }
  
  export default CreateDeck;
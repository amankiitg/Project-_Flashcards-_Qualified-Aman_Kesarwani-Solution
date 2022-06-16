import React, { useState  }  from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function DeckForm({initialFormState, deckFunction}) {

    const [formData, setFormData] = useState({ ...initialFormState });

    const history = useHistory();
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

        const response = deckFunction(formData);
        const savedData = await response;
        console.log("Saved user!", savedData);
        history.push("/");
      };

    return (
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
    );
  }
  
  export default DeckForm;
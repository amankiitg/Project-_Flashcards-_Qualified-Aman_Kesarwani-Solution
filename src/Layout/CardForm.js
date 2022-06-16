import React, { useState  }  from "react";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CardForm({initialFormState, cardFunction, navAftersubmit, navafterCancel}) {

    const { deckId } = useParams();

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

        if(initialFormState.front===""){
            const response = cardFunction(deckId, formData);
            const savedData = await response;
        console.log("Saved card!", savedData);
        } else{
            const response = cardFunction(formData);
            const savedData = await response;
            console.log("Updated card!", savedData);
        }
        console.log('navAftersubmit',navAftersubmit);
        history.push(navAftersubmit);
      };

    return (
        <form onSubmit={submitHandler}>
             <div className="form-group">
                <label htmlFor="front" className="form-label">Front</label>
                <textarea 
                className="form-control"
                rows="2"
                id="front"
                type="textarea"
                name="front"
                placeholder = "Front"
                onChange={handleChange}
                value={formData.front}
                />
            </div>
            <div className="form-group">
                <label htmlFor="back" className="form-label">Back</label>
                <textarea 
                className="form-control"
                rows="2"
                id="back"
                type="textarea"
                name="back"
                placeholder = "Back"
                onChange={handleChange}
                value={formData.back}
                />
            </div>
            
            <Link to={navafterCancel}><button className="btn btn-secondary">Done</button></Link>
            <button type="submit" className="btn btn-primary mx-3">Save</button>
        </form>        
    );
  }
  
  export default CardForm;
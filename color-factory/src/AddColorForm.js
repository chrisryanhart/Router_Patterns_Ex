import React, {useState} from "react";
import { Link} from 'react-router-dom/cjs/react-router-dom.min';

function AddColorForm({addColor}) {
    // form should control input value
    const INITIAL_STATE = '';
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form>

            <input onChange={handleChange} value={formData}/>
            <button onClick={handleSubmit}><Link to='/colors'>Add Color</Link></button>
        </form>
    )
}


export default AddColorForm;
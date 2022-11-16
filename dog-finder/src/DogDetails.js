import React from "react";
import {Link, Redirect} from 'react-router-dom/cjs/react-router-dom.min';

function DogDetails({dog}){
    if (!dog) return <Redirect to="/dogs"/>

    const factList = dog.facts.map((fact,idx) => <li key={idx}>{fact}</li>);

    const name = dog.name;

    const picLink = dog.src[name];

    return (
        <div>
            <h2>Dog Name: {name}</h2>
            <img src={picLink} alt='dog pic'/>
            <h3>Age: {dog.age}</h3>
            <ul>
                {factList}
            </ul>
            <button><Link to='/dogs'>Go Back</Link></button>

        </div>
    );
}


export default DogDetails;
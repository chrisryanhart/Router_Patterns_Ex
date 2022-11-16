import React from "react";
import DogDetails from "./DogDetails";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';


function FilterDogDetails({dogs}) {

    const {name} = useParams();

    if (name) {
        const dog = dogs.filter(dog => dog.name.toLowerCase() === name.toLowerCase());

        return (
            <>
                <DogDetails dog={dog[0]}/>
            </>
        )
    }

    return null;
}

export default FilterDogDetails;
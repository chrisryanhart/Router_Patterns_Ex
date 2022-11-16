import React from "react";
import {Link} from 'react-router-dom/cjs/react-router-dom.min';


function DogList({dogs}) {

    const dogNames = dogs.map((dog,idx) => {
            return (

                <div>
                    <img src={dog.src[dog.name]}/>
                    <div>
                        <button><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></button>
                    </div>
                </div>
            );
    });

    return (
        <div>
            <ul>
                {dogNames}
            </ul>
        </div>

    )
}

export default DogList;
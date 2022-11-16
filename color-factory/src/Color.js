import React from "react";
import { Link, useParams, Redirect, useHistory} from 'react-router-dom/cjs/react-router-dom.min';


function Color ({colors}) {
    const { color } = useParams();
    const history = useHistory();

    if (!colors.includes(color)) {
        history.push('/colors');
    }


    return (
        <>
            <div className='color' style={{backgroundColor: color}}>
                <p>Here is the color {color}</p>
                <button><Link to='/colors'>Go Back</Link></button>
            </div>
        </>
    );
}

export default Color;
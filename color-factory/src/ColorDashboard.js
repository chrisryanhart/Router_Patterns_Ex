import React, {useState} from "react";
import { Link} from 'react-router-dom/cjs/react-router-dom.min';


function ColorDashBoard({colors}) {


    // need to monitor colors here for the list
    // new color appears at the top of the list

    const list = colors.map((color, idx) => <li key={idx}><Link to={`/colors/${color}`}>{color}</Link></li>);


    return (
        <>
            <div>
                <h2>This is the color factory</h2>
                <Link to='/colors/new'>Add a Color</Link>
            </div>
            <div>
                <h3>Please select a color.</h3>
                <ul>
                    {list}
                </ul>
            </div>
        </>
    );
}

export default ColorDashBoard;
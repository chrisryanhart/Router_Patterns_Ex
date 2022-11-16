import React, {useState} from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import AddColorForm from './AddColorForm';
import ColorDashBoard from './ColorDashboard';
import Color from './Color';

function Routes() {

    const INITIAL_STATE = ['green','yellow','blue']

    const [colors, setColors] = useState(INITIAL_STATE);

    const addColor = (newColor) => {
        
        setColors([newColor, ...colors]);
    }

    return (
        <BrowserRouter>
        <Switch>

          <Route exact path="/colors/new">
            <AddColorForm addColor={addColor}/>
          </Route>
          <Route exact path="/colors">
            <ColorDashBoard colors={colors}/>
          </Route>
          <Route exact path="/colors/:color">
            <Color colors={colors}/>
          </Route>
          <Redirect to="/colors" />
          {/* add Redirect */}
        </Switch>
    
        </BrowserRouter>
    );

}

export default Routes;
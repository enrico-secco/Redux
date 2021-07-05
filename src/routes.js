import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home'
import Reservas from './pages/Reservas'

export default function Routes(){
    return(
        <Switch> {/* Usou o browserRouter no App.js, pois um Switch tem que estar dentro de um Router */}
            <Route exact path="/" component={Home} />
            <Route path="/reservas" component={Reservas}/>
        </Switch>

    )
}

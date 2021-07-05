import React from 'react';
import { Router } from 'react-router-dom'
import { Provider }  from 'react-redux'


import Routes from './routes'
import Header from './components/Header'

import store from './store'
import history from './services/history'

export default function App() {
 return (
   <Provider store={store}> {/*Faz com que todos os componentes da aplicação possam acessar as propriedades do redux */}

    <Router history={history}>
     <Header/>
     <Routes/>
    </Router>

   </Provider>
   
   //TODA ESSA PARTE PODERIA SER FEITA NO ROUTES.JS, FICARIA MAIS ORGANIZADO.
 );
}

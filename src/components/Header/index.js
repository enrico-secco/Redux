import React from 'react';
import { useSelector } from 'react-redux'; //Conectar o redux com os nossos reducers.

import './style.css'

import {Link} from 'react-router-dom'

import Logo from '../../assets/logo.svg'

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length); //recebe uma state (por padrão). E seleciona a reserve (função).
  //passou o length aqui. Mas poderia estar sem e no <span> colocar reserveSize.length

 return (
   <header className="container">
       <Link to="/">
        <img className="logo" src={Logo} alt="Logo do Projeto"/>
       </Link>

       <Link className="reserva" to="/reservas">
        <div>
          <strong> Minhas reservas </strong>
          <span>{reserveSize} reservas </span>
        </div>
       </Link>
   </header>
 );
}
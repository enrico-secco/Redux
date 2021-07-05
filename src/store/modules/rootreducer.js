//  Criou o rootreducer, para fazer o carregamentos dos reducers da aplicação. "De forma mais organizada."
//      De forma mais fácil e pra carregar de maneira mais fácil se tiverem muitos reducers

import { combineReducers } from 'redux'
//Para fazer a combinação e carregar todos os reducers que forem passados na aplicação.

import reserve from './reserve/reducer'

export default combineReducers({
    reserve,
})
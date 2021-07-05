import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';

//Não pode criar uma Store sem ter nenhum reducer.
// Cria a função do reducer separada, pra manter organização.
//  Criou o rootreducer, para fazer o carregamentos dos reducers da aplicação. De forma mais fácil e pra carregar de maneira mais fácil se tiverem muitos reducers
import rootreducer from './modules/rootreducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(rootreducer, enhancer);

sagaMiddleware.run(rootSaga)

export default store;

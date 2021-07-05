import { select ,call, put, all, takeLatest } from 'redux-saga/effects'; //call -> fazer requisição, put -> disparar action dentro do saga, select -> fazer sideEffect e trazer toda a state(array)
import { addReserveSuccess, updateAmountSuccess } from './actions'
import  api from '../../../services/api';

import  history from '../../../services/history';




function* addToReserve({ id }){ //function* (generator), mesma coisa que async await (funções assíncronas) para fazer requisições e esperar ela chegar, porém "mais poderoso".
   
    const tripExists = yield select(
        state => state.reserve.find(trip => trip.id === id)
        //state, pode acessar o sstate que quiser e acesa o reducer reserve
    );

    const myStock = yield call(api.get, `/stock/${id}`); //yield = await
    console.log(myStock);

    const stockAmount = myStock.data.amount; //.data -> por causa da requisição, tem vários e no data está o valor recebido.

    const currentStock = tripExists ? tripExists.amount : 0;

    const amount = currentStock + 1;

    if(amount > stockAmount){
        alert("Quantidade máxima atingida")
        return; //para aqui, então não soma 1 a mais no update (que atualiza os valores do amount)
    }

    if(tripExists){
        //Aumentar o amount 
        
        yield put(updateAmountSuccess(id, amount)); //Como já passou pela request e fez as validações, então chama o Success

    }else{
        //Adicionar
        const response = yield call(api.get, `trips/${id}`);
        //yield = await
    
        const data = {
            ...response.data,
            amount: 1,
        }

        yield put(addReserveSuccess(data));

        history.push('/reservas'); //pra depois que ele chama fazer o redirecionamento
    }

   
}


function* updateAmount({ id, amount}){

    if( amount <= 0) return;

    const myStock = yield call(api.get, `/stock/${id}`); //yield = await

    const stockAmount = myStock.data.amount;

    if(amount > stockAmount ){
        alert("Quantidade máxima atingida");
        return;
    }

    yield put(updateAmountSuccess(id, amount));


}


export default all([ //Disparar listeners, pra ele ficar ouvindo
    takeLatest('ADD_RESERVE_REQUEST', addToReserve) ,
    //Em 2 cliques rápidos, se antes de terminar a primeira req desse o segundo clique, ele só vai fazer a ultima requisição (referente ao ultimo click)
    //TakeEvery -> em 3 cliques rápidos, ele iria 3 requisições (EVERY)

    takeLatest('UPDATE_RESERVE_REQUEST', updateAmount)
]);
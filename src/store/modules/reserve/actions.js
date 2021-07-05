//Criou para manter as actions organizadas. Manter as actions lançadas (dispatchs) organizadas.

export function addReserveRequest(id){
    return {
        type: 'ADD_RESERVE_REQUEST', // type => parâmetro obrigatório para disparar uma ação redux. Depois vai pegar ( e fltrar ) a ação no reducer.js, pelo type.
        id
      }
}

export function addReserveSuccess(trip){
  return {
      type: 'ADD_RESERVE_SUCCESS', // type => parâmetro obrigatório para disparar uma ação redux. Depois vai pegar ( e fltrar ) a ação no reducer.js, pelo type.
      trip
    }
} 


export function removeReserve(id){
   return {
        type:'REMOVE_RESERVE',
        id, //manda o id
      }
}

/* Quando trabalha, divide as actions em duas:
    Request -> é ouvida pelo saga. Depois que fizer a requisição e estiver certo, ele vai chamar o Success.
    Success -> quem chama é o saga, vai ser ouvida pelo reducer
*/

export function updateAmountRequest(id, amount){
  return {
    type: 'UPDATE_RESERVE_REQUEST',
    id,
    amount
  }
}

  export function updateAmountSuccess(id, amount){
    return {
      type: 'UPDATE_RESERVE_SUCCESS',
      id,
      amount
    }
}

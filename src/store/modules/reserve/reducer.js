import produce from 'immer'; //vai cuidar da imutabilidade, e também facilitar mexer nele.

//função reducer
export default function reserve(state = [], action){ //Parâmetros por padrão. Inicializa o state ali
    
    switch(action.type){
        case 'ADD_RESERVE_SUCCESS':
            //não deu state.push() por questão de imutabilidade.
            return produce(state, draft => { //draft é uma cópia da state original

               draft.push(action.trip); //tratamento reserva mais de um feito no saga
            });

            case 'REMOVE_RESERVE':
                return produce(state, draft => {

                    const tripIndex = draft.findIndex( trip => trip.id === action.id); //action.id, porque manda o id quando chama.

                    if(tripIndex >= 0){
                        draft.splice(tripIndex, 1); //(posição, excluindo primeiro objeto)
                    }
                })

            case 'UPDATE_RESERVE_SUCCESS': {

                return produce(state, draft => {

                    const tripIndex = draft.findIndex( trip => trip.id === action.id); //action.id, porque manda o id quando chama.

                    if(tripIndex >= 0){
                        draft[tripIndex].amount = Number(action.amount);
                    }
                });
            }
            

        default:
            return state;
    }
}
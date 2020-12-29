import {ADD_TO_CART,DECREASE,INCREASE,REMOVE,CLEAR_CART, GET_TOTALS} from './actionType' 

export function addToCart(data){
return{
    type: ADD_TO_CART,
    payload : data
}
}

export function increase(data){
    return{
        type: INCREASE,
        payload : data
    }
    }

export function decrease(data){
return{
    type: DECREASE,
    payload : data
}
}

export function remove(data){
    return{
        type: REMOVE,
        payload : data
    }
}

export function clearCart(data){
return{
    type: CLEAR_CART,
    payload : data
}
}


export function getTotals(data){
return{
    type: GET_TOTALS,
    payload : data
}
}

    
    



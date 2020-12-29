import { DECREASE, INCREASE, CLEAR_CART, REMOVE, GET_TOTALS, ADD_TO_CART } from "./actionType";
import data from "../../data"

const initialStore = {
  cart: [],
  total: 0,
  amount: 0
}

const reducer = (state = initialStore, action) => {


  switch (action.type) {
    case CLEAR_CART:
      return { ...state,amount: 0, cart: '' }

    case DECREASE:

      let tempCart = [];
      if (action.payload.amount === 1) {
        return { ...state, cart: state.cart.filter((item => item.id !== action.payload.id)) }
      } else {
        tempCart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            item = { ...item, amount: item.amount - 1 }
          };
          return item;
        });
        console.log(tempCart);

      }
      return { ...state, cart: tempCart }

    case INCREASE:

      const incCart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, amount: item.amount + 1 }
        };
        return item;
      });
      return { ...state, cart: incCart }

    case REMOVE:

      const newCart = state.cart.filter((item) => item.id !== action.payload.id)
      return { ...state, cart: newCart }

    case GET_TOTALS:

      if (state.cart.length !== 0) {
        let cartTotal = 0
        let amount = 0
        state.cart.forEach((item) => {
            cartTotal = cartTotal + item.price * item.amount
            amount += item.amount
        }
        ); 

        return { ...state, total: cartTotal,amount }
      }else{
        return {...state, amount: 0}
      }

    case ADD_TO_CART:
       
       let item = data.filter((item)=> item.id === action.payload)
       console.log("item",item);      
     
     
      console.log("Cart",state.cart);
      console.log(state.cart.indexOf(item[0]));

      if(state.cart.indexOf(item[0]) !== -1){
 
        let index = state.cart.indexOf(item[0])

        console.log('Already Exists');
        state.cart[index].amount += 1; 
        return {
          state,
          cart:[...state.cart]
        }

      }

       return {
         state,
         cart:[...state.cart,item[0]]
       }
     
    



  }
  return state



}

export default reducer;






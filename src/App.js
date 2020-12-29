import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import Home from "./components/Home"
// items

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createStore } from "redux";
import reducer from "./redux/cart/reuducer";

//react-redux - Provider - wraps app , connect - used in components
import { Provider } from "react-redux";



//reducer- function that used to update the state
    // two arguments - state,action
         // state - old state
         //action - what update?
    // return updated or old state



//initial store holds initial state values


//store - that uses to store the states,takes reducer function as a parameter
const store = createStore(reducer);

// dispatch method - send actions to store
//actions(objects) - MUST HAVE TYPE PROPERTY - what kind of action
// store.dispatch({ type: "DECREASE" })
// store.dispatch({ type: DECREASE })




const App = ()=>{

return (
  <Router>
    <Switch>
  <Provider store={store}>
    <Navbar />
    <Route exact path="/">
        <Home/>
     </Route>
    <Route path="/cart">
        <CartContainer/>
    </Route>
    
     <Route path="*">
         {/* <Home/> */}
      </Route>   
   
  
  </Provider>
  </Switch>
  </Router>
);
}

export default App;

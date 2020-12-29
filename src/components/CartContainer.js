import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { clearCart } from "../redux/cart/actions";
import {useDispatch} from 'react-redux'

const CartContainer = ({ cart, total }) => {
  const Dispatch = useDispatch()

  
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>MyCart</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={()=> Dispatch(clearCart())}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => {
  const { cart, total } = state
  return {cart,total}
}

export default connect(mapStateToProps)(CartContainer);
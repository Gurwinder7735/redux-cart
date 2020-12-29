import React from 'react'
import data from '../data'
import { connect } from "react-redux";
import {useDispatch} from 'react-redux'
import {addToCart,getTotals} from '../redux/cart/actions'

function Home({cart}) {
    const Dispatch = useDispatch()
    React.useEffect(() => {
        // alert('ok')
        Dispatch(getTotals());
      },[cart])

    if (data.length === 0) {
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
       <div className="products-container">
          {
          data.map((item)=>{
            const{id,img,title,price} = item
            return <div className="cart-item">
            <img src={img} alt={title} />
            <div>
              <h4>{title}</h4>
              <h4 className="item-price">${price}</h4>
             
              <button className="remove-btn" onClick={()=>Dispatch(addToCart(id))}>
                Add To Cart
              </button>
            </div>
            </div>
          })
        }
    </div>
      )
     
}

const mapStateToProps = (state) => {
    const { cart, total } = state
    return {cart,total}
  }
  

export default connect(mapStateToProps)(Home)

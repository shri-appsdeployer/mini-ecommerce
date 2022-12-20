import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { getState, remove } from '../store/cartSlice'
import { getCart } from '../store/cartSlice'


const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCart)
    const state = useSelector(getState)
    console.log(state.cart.cart)



    const handleRemove=(id)=>{
        console.log(id)
        dispatch(remove(id))
    }

  return (
    <>
    <h1 className='m-2'>Cart Items({`${cartItems.length}`})</h1>
    <div className="cart-wrapper m-4">
        {cartItems.map((elem)=>(
            <div className="card d-flex flex-row-reverse" key={elem.id} >
                <div>
                     <h5 className="card-header">{elem.title}</h5>
                     <div className="card-body">
                     <h5 className="card-title">Category : {elem.category}</h5>
                     <h5 className="card-title">Price : ${elem.price}</h5>
                     <p className="card-title"><strong>Description</strong>:{elem.description}</p>
                     <button  className="btn btn-danger" onClick={()=>handleRemove(elem.id)}>Remove</button>
                </div>
            </div>
            <img src={elem.image} alt={elem.title} style={{width:'250px', height:'fit-content',margin:'8px'}}/>
          </div>
        ))}
    </div>
    </>
  )
}

export default Cart
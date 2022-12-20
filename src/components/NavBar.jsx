import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCart } from '../store/cartSlice'

const NavBar = () => {
  const cartItems = useSelector((state)=> state.cart.cart)
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Mini-Ecommerce</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/products">Products</Link>
                        </div>
                    </div>
                    <Link to='/cart' className="btn btn btn-outline-light">Cart Items : {cartItems.length}</Link>
                </div>
        </nav>
    </>
  )
}

export default NavBar;


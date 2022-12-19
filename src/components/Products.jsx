import React from 'react'
import { useState,useEffect } from 'react'
import Card from './Card'
import './Components.css'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(()=>{
      const fetchProducts= async()=>{
          const res = await fetch('https://fakestoreapi.com/products');
          // It fetch return response in string so we will convert it to json
          const data = await res.json(); //string to json
          console.log(data)
          setProducts(data)
      };
      fetchProducts()
  },[])


  return (
    <>
      <h2>Products</h2>
        <div className='products-grid'>
          {
            products.map(({id,title,price,category,description,image})=>(
                <Card key={id} id={id} title={title} price={price}
                category={category} description={description} image={image}
                />
            ))
          }
        </div>
    </>
  )
}

export default Products;
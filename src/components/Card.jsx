import React from "react";
import './Components.css'
import { add } from '../store/cartSlice';
import { useDispatch } from "react-redux";

const Card = ({id,title,price,category,description,image}) => {
  const dispatch = useDispatch()

  const handleAdd=({id,title,price,category,description,image})=>{
    const product={id,title,price,category,description,image}
      dispatch(add(product))
  }
  return (
    <>
      <div className="card card-w" key={id}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{category}</p>
          <a href="#" className="btn btn-secondary" onClick={()=> handleAdd({id,title,price,category,description,image})} >Buy @ ${price}</a>
        </div>
      </div>
    </>
  );
};

export default Card;

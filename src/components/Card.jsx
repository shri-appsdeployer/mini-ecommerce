import React from "react";
import './Components.css'

const Card = ({id,title,price,category,description,image}) => {
  return (
    <>
      <div className="card card-w" key={id}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{category}</p>
          {/* <p className="card-text">{description}</p> */}
          <a href="#" className="btn btn-secondary">Buy @ ${price}</a>
        </div>
      </div>
    </>
  );
};

export default Card;

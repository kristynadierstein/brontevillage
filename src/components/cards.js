import React from "react";


const SuitesCard = (props) => (
  <div className="col-3">
    <div className="card m-1">
    <a src={`/produit/${props.id}`} id={props.id}>
      <img className="card-img-top" src="https://via.placeholder.com/362x200" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text"> Size: {props.size} ft</p>
        <p className="card-text"> Rooms: {props.rooms}</p>
        <p className="card-text"> Den: {props.den}</p>
        <p className="card-text"> Description: {props.description}</p>
      </div>
    </a>
    </div>
  </div>
);

export default SuitesCard 
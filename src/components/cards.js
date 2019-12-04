import React from "react";

const SuitesCard = ({ title, size, rooms, den, description }) => (
  <div className="card">
    <img className="card-img-top" src="https://via.placeholder.com/362x200" alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text"> Size: {size} ft</p>
      <p className="card-text"> Rooms: {rooms}</p>
      <p className="card-text"> Den: {den}</p>
      <p className="card-text"> Description: {description}</p>
    </div>
  </div>
);

export default SuitesCard
import React from "react";
import './index.scss';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const SuiteCard = props => (
    <div className="row">
      <div className="col-3">
        <div className="card m-1 mb-5">
          <Link to={`/suites/${props.id}`}>
            <img
              className="card-img-top"
              src={props.plan[0].url}
              alt="Suite card"
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text"> Size: {props.size} ft</p>
              <p className="card-text"> Rooms: {props.rooms}</p>
              <p className="card-text"> Den: {props.den}</p>
              <p className="card-text"> Description: {props.description}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-3">
        <div className="card m-1 mb-5">
          <Link to={`/suites/${props.id}`}>
            <img
              className="card-img-top"
              src={props.plan[0].url}
              alt="Suite card"
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text"> Size: {props.size} ft</p>
              <p className="card-text"> Rooms: {props.rooms}</p>
              <p className="card-text"> Den: {props.den}</p>
              <p className="card-text"> Description: {props.description}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-3">
        <div className="card m-1 mb-5">
          <Link to={`/suites/${props.id}`}>
            <img
              className="card-img-top"
              src={props.plan[0].url}
              alt="Suite card"
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text"> Size: {props.size} ft</p>
              <p className="card-text"> Rooms: {props.rooms}</p>
              <p className="card-text"> Den: {props.den}</p>
              <p className="card-text"> Description: {props.description}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="col-3">
        <div className="card m-1 mb-5">
          <Link to={`/suites/${props.id}`}>
            <img
              className="card-img-top"
              src={props.plan[0].url}
              alt="Suite card"
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text"> Size: {props.size} ft</p>
              <p className="card-text"> Rooms: {props.rooms}</p>
              <p className="card-text"> Den: {props.den}</p>
              <p className="card-text"> Description: {props.description}</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-100"></div>
  </div>
)

SuiteCard.propTypes = {
  id: propTypes.string.isRequired,
  size: propTypes.number.isRequired,
  rooms: propTypes.string.isRequired,
  den: propTypes.string.isRequired
}

export default SuiteCard;
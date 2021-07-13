import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

function Card(props) {
    return (
      <div className="col-md-4">
        <Link to={"/detail/" + props.i}>
          <img src={ "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg" } width="100%"></img>
        </Link>
        <h4>
          <b>{props.shoes.title}</b>
        </h4>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price}원</p>
      </div>
    );
  }


export default Card;
import React from 'react'
import two from "./../assets/2.jpg"
import three from "./../assets/3.jpg"
import four from "./../assets/4.jpg"
import "./cards-style.css";

const Cards = () => {
  return (
    <div className="container">
      <center><i><h1>PRODUCTS LIST</h1></i></center>
      <div className="row text-center">
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src={two} alt="Paris" className="product-image"/>
            <p><strong>REDDRAGON</strong></p>
            <button className="btn btn-danger">Buy Product</button>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src={two} alt="New York" className="product-image"/>
            <p><strong>REDDRAGON</strong></p>
            <button className="btn btn-danger">Buy Product</button>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src={two} alt="San Francisco" className="product-image"/>
            <p><strong>REDDRAGON</strong></p>
            <button className="btn btn-danger">Buy Product</button>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src={two} alt="Paris" className="product-image"/>
            <p><strong>REDDRAGON</strong></p>
            <button className="btn btn-danger">Buy Product</button>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src={two} alt="New York" className="product-image"/>
            <p><strong>REDDRAGON</strong></p>
            <button className="btn btn-danger">Buy Product</button>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="thumbnail">
            <img src={two} alt="San Francisco" className="product-image"/>
            <p><strong>REDDRAGON</strong></p>
            <button className="btn btn-danger">Buy Product</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards

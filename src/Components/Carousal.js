import React from 'react';
import two from "./../assets/2.jpg"
import three from "./../assets/3.jpg"
import six from "./../assets/6.jpg"
import "./carousal-style.css"

const Carousal = () => {
  return (
    <div class="container-fluid" id="carousel">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
      
            
            <div class="carousel-inner">
                <div class="item active">
                    <img src={two} alt="Los Angeles"/>
                    <div class="carousel-caption">
                        <h3>REDDRAGON KEYBOARDS </h3>
                    </div>
                </div>
                <div class="item">
                    <img src={three} alt="Chicago"/>
                    <div class="carousel-caption">
                        <h3>REDDRAGON KEYBOARDS </h3>
                    </div>
                </div>
                <div class="item">
                    <img src={six} alt="New York"/>
                    <div class="carousel-caption">
                        <h3>REDDRAGON KEYBOARDS </h3>
                    </div>
                </div>
            </div>
      
            
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
  )
}

export default Carousal;

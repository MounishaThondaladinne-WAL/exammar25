import React, { useEffect } from "react";
import "./Scroll.css";
import "./Bootstrap/css/bootstrap.css";
export default function Scroll(props) {
  useEffect(() => {
    props.products.slice(0, 9).forEach((product, index) => {
      document.querySelector(`#product${index + 1}`).innerHTML = `
			<div class="card">
				<img class="card-img-top"
					src="${product.image}"
					alt="Card image cap">
				<div class="card-body">
					<p class="card-title">${product.title}</p>
					<strong>₹${product.price}</strong>
				</div>
			</div>`;
    });
  }, []);
  return (
    <div className="sscontainer">
      <div className="row">
        <div className="col-md-12">
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="5000"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm-4" id="product1"></div>
                  <div className="col-sm-4" id="product2"></div>
                  <div className="col-sm-4" id="product3"></div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-4" id="product4"></div>
                  <div className="col-sm-4" id="product5"></div>
                  <div className="col-sm-4" id="product6"></div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm-4" id="product7"></div>
                  <div className="col-sm-4" id="product8"></div>
                  <div className="col-sm-4" id="product9"></div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

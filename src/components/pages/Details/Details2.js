import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className=" col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title*/}
              {/* product info*/}

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-captialize">
                  <h1>modle : {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4>
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/DryProductList">
                      <div className="ButtonContainer">
                        <p>back to products</p>
                      </div>
                    </Link>
                    <div className="ButtonContainer">
                      <button
                        className="buttonCart"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.DryaddToCart(id);
                        }}
                      >
                        {inCart ? "in Cart" : " add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of product info*/}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

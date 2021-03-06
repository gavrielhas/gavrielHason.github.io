import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default class Details1 extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, info, price, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                {/* 
                <div className=" col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1 className="text-center">{title}</h1>
                </div>
                */}
              </div>

              {/* end of title*/}
              {/* product info*/}

              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 ">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-captialize">
                  <h1>{title}</h1>
                  {/* 
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  */}
                  <h4>
                    <strong>
                      מחיר : &nbsp;<span>₪</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    קצת על המוצר
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/ProductList">
                      <div className="ButtonContainer">
                        <p>חזרה לפיצוחים</p>
                      </div>
                    </Link>
                    <div className="ButtonContainer">
                      <button
                        className="buttonCart"
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                        }}
                      >
                        {inCart ? <p>הפריט נוסף לעגלה</p> : <p>הוסף לעגלה </p>}
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

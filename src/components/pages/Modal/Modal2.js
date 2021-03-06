import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default class Modal2 extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { DrymodalOpen, closeDryModal } = value;
          const { img, title, price } = value.DrymodalProduct;

          if (!DrymodalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-9 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h5>הפריט נוסף לעגלה</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">מחיר : ₪ {price}</h5>
                      <Link to="/DryProductList">
                        <div
                          className="ButtonContainer"
                          onClick={() => closeDryModal()}
                        >
                          להמשך קניה
                        </div>
                      </Link>
                      <Link to="/cart">
                        <div
                          className="ButtonContainer"
                          onClick={() => closeDryModal()}
                        >
                          לעגלה
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: white;
  }
`;

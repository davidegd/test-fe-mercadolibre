import React from "react";
import "../assets/styles/components/NotFound.scss";
import NotFoundImg from "../assets/images/not-found.png";

export const NotFound = () => {
  return (
    <div className="product__not__found">
      <img src={NotFoundImg} alt="product-not-found" />
      <h4 className="product__not__found__subtitle">Producto no encontrado</h4>
      <h1 className="product__not__found__title">¡Sigue buscando!</h1>
    </div>
  );
};

import React, { useEffect, useCallback, useState } from "react";
import { Row, Col } from "react-bootstrap";
import "../assets/styles/components/ProductDetail.scss";
import { apiClient } from "../services";
import { useParams } from "react-router-dom";
import "../assets/styles/App.scss";
import { formatCurrency } from "../utils/format-currency";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageWrapper } from "../components/PageWrapper";
import { NotFound } from "../components/NotFound";
import { useHistory } from "react-router";

export const ItemDetail = () => {
  const location = useParams();
  const params = useHistory();
  const [product, setProduct] = useState();
  const [loadingProduct, setLoadingProduct] = useState();
  const { categories } = params.location || [];

  const fetchItemDetail = useCallback(async (id) => {
    setLoadingProduct(true);
    const { data } = await apiClient.Api.getProductDetail(id);
    setProduct(data.item);
    setLoadingProduct(false);
  }, []);

  useEffect(() => {
    fetchItemDetail(location.id);
  }, [fetchItemDetail, location.id]);

  return (
    <PageWrapper
      title="Item detail"
      description="Page where detailed information of a product is displayed"
    >
      {!!product ? (
        <div style={{ marginBottom: 50 }}>
          {categories && <Breadcrumb categories={categories} />}
          <Row className="product__detail__container p-0 m-0">
            <Col xs={12} md={12} lg={9}>
              <div className="d-flex product__data__content">
                <img src={product.picture} alt="product-detail" width="680" />
              </div>
            </Col>

            <Col xs={12} md={12} lg={3} className=" p-3">
              <div className="product__data__content">
                <span className="product__sales">
                  {product.condition === "new" ? "Nuevo" : "Usado"} -{" "}
                  {product.sold_quantity} vendidos
                </span>
                <span className="product__name">{product.title}</span>
                <span className="product__price">
                  {formatCurrency(product.price)}
                </span>
                <button className="button__buy">
                  <span>Comprar</span>
                </button>
              </div>
            </Col>
            <Col xs={12} lg={12} xl={12} className="">
              <div className="d-flex product__data__content">
                <h4>Descripción</h4>
                <span>{product.description}</span>
              </div>
            </Col>
          </Row>
        </div>
      ) : (
        !loadingProduct && <NotFound />
      )}
    </PageWrapper>
  );
};

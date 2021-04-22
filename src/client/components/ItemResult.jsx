import React, { useCallback, useContext } from "react";
import { AppContext } from "../provider";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import "../assets/styles/components/ItemResult.scss";
import { formatCurrency } from "../utils/format-currency";
import IconFreeShipping from "../assets/images/icon-free-shipping.png";
import { useHistory } from "react-router";

export const ItemResult = ({ itemData }) => {
  const { picture, price, title, condition, id, free_shipping } = itemData;
  const { push } = useHistory();
  const [state, setState] = useContext(AppContext);
  const handleItemClick = useCallback(() => {
    push({
      pathname: `/items/${id}`,
      categories: state.categories,
    });
  }, [id, push, state.categories]);

  return (
    <Row lg={12} onClick={handleItemClick} className="item__result__content">
      <div className="item_result__image__container">
        <img className="item_result__image" src={picture} alt="img" />
      </div>
      <Col sm={9} md={8} lg={9}>
        <Row className="w-100 m-0">
          <Col md={8} lg={10} xs={6} className="item__result__data p-0">
            <div className="item__price">
              <span className="item__result__price">
                {formatCurrency(price)}
              </span>
              {free_shipping && (
                <img src={IconFreeShipping} alt="free-shipping" />
              )}
            </div>
          </Col>
          <Col
            lg={2}
            md={4}
            xs={6}
            className="d-flex item__result__data  justify-content-end  p-0 "
          >
            <span className="item__result__title">
              {condition === "new" ? "Nuevo" : "Usado"}
            </span>
          </Col>
        </Row>
        <Row lg={12} className="d-flex align-items-center m-0 p-0 w-100">
          <Col lg={4} md={6} xs={16} className="p-0">
            <span className="item__result__title">{title}</span>
          </Col>
        </Row>
      </Col>
      <div className="item__divider" />
    </Row>
  );
};

ItemResult.propTypes = {
  itemData: PropTypes.object,
};

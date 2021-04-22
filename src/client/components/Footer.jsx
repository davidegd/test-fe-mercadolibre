import React from "react";
import { Row, Col } from "react-bootstrap";
import "../assets/styles/App.scss";

export const Footer = () => {
  return (
    <Row>
      <Col
        xs={12}
        md={12}
        className="w-100 d-flex align-items-center justify-content-center footer"
      >
        <span>© Mercado Libre - {new Date().getFullYear()}</span>
      </Col>
    </Row>
  );
};

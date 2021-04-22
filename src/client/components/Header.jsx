import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import logoLg from "../assets/images/logo-lg.png";
import "../assets/styles/components/Header.scss";
import { SearchBar } from "../components/SearchBar";
import "../assets/styles/App.scss";

export const Header = () => {
  return (
    <Row className="header custom__container">
      <Col xs={1} lg={1}></Col>
      <Col className="d-flex align-items-center" xs={2} lg={1}>
        <Link to="/">
          <img className="header__logo" src={logoLg} alt="logo" />
        </Link>
      </Col>
      <Col
        className="d-flex align-items-center justify-content-start"
        xs={8}
        lg={9}
      >
        <SearchBar />
      </Col>
      <Col lg={1}></Col>
    </Row>
  );
};

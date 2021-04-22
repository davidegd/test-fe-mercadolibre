import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../assets/styles/components/Layout.scss";

const Layout = ({ pageTitle, pageDescription, children }) => (
  <Container fluid className="layout__container">
    <Header />

    <Row className="layout__page__container">
      <Col xs={1} md={1} />
      <Col xs={10} md={10}>
        {children}
      </Col>
      <Col xs={1} />
    </Row>
    <Footer />
  </Container>
);

export default Layout;

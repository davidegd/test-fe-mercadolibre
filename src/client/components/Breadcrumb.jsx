import React from "react";
import { Row, Col } from "react-bootstrap";
import "../assets/styles/components/Layout.scss";

export const Breadcrumb = ({ categories }) => {
  return (
    <>
      {!!categories && categories.length > 0 ? (
        <Row>
          <Col xs={10} md={10} lg={10}>
            <div className="breadcrumb__container">
              {categories.map((category, index) => {
                const lastItem = index === categories.length - 1;
                return (
                  <div key={category}>
                    <span
                      style={{
                        fontWeight: `${!lastItem ? "regular" : "bold"}`,
                      }}
                      className="breadcrumb__title"
                    >
                      {category}
                    </span>
                    {!lastItem && (
                      <span className="breadcrumb__symbol">{">"}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

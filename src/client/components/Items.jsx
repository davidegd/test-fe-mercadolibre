import React from "react";
import { Row, Col } from "react-bootstrap";
import { ItemResult } from "./ItemResult";
import "../assets/styles/components/ItemResult.scss";

export const SearchResults = ({ items }) => {
  return (
    <Row>
      <Col
        className="items__result__container p-0"
        lg={{ span: 10, offset: 1 }}
      >
        {items.map((item, index) => {
          return <ItemResult key={item.id + index} itemData={item} />;
        })}
      </Col>
    </Row>
  );
};

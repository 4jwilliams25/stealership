import React from "react";
import {
  Row,
  Col,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import CarModal from "./CarModal";

const CarItem = props => {
  return (
    <Row className="d-flex justify-content-center">
      <ListGroupItem className="w-100 m-1 bg-dark border border-warning">
        <Row>
          <Col>
            <ListGroupItemHeading className="text-center text-warning">
              {`${props.car.year} ${props.car.make} ${props.car.model}`}
            </ListGroupItemHeading>
          </Col>
          <Col className="text-warning">
            <ListGroupItemText>Mileage: {props.car.miles}</ListGroupItemText>
            <ListGroupItemText>Price: ${props.car.price}</ListGroupItemText>
          </Col>
          <Col>
            <CarModal car={props.car} />
            {props.car.is_sold ? <b className="text-success">Sold</b> : ""}
          </Col>
        </Row>
      </ListGroupItem>
    </Row>
  );
};

export default CarItem;

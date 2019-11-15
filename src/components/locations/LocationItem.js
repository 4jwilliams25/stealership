import React from "react";
import {
  Row,
  Col,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button
} from "reactstrap";

const LocationItem = props => {
  return (
    <Row className="d-flex justify-content-center">
      <ListGroupItem className="w-100 m-1 bg-dark border border-warning">
        <Row>
          <Col>
            <ListGroupItemHeading className="text-center text-warning">
              {props.location.name}
            </ListGroupItemHeading>
            <Button
              onClick={() => props.handleClick(props.location.id)}
              outline
              color="warning"
            >
              View Cars
            </Button>
          </Col>
          <Col className="text-warning">
            <ListGroupItemText>{props.location.address}</ListGroupItemText>
            <ListGroupItemText>{props.location.phone}</ListGroupItemText>
          </Col>
        </Row>
      </ListGroupItem>
    </Row>
  );
};

export default LocationItem;

import React from "react";
import { Row, Col, ListGroup, ListGroupItem, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const CarDetails = props => {
  return (
    <div>
      <Row>
        <Col>
          <ListGroup>
            <ListGroupItem>
              <b className="text-left">Year:</b>
              <p className="text-right">{props.car.year}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b className="text-left">Make:</b>
              <p className="text-right">{props.car.make}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b className="text-left">Model:</b>
              <p className="text-right">{props.car.model}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b className="text-left">Mileage:</b>
              <p className="text-right">{props.car.miles}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b className="text-left">VIN:</b>
              <p className="text-right">{props.car.vin}</p>
            </ListGroupItem>
          </ListGroup>
          <Button color="warning">
            <NavLink to="/CarUpdate">Update</NavLink>
          </Button>{" "}
        </Col>
        <Col>
          <ListGroup>
            <ListGroupItem>
              <b className="text-left">Price:</b>
              <p className="text-right">{props.car.price}</p>
            </ListGroupItem>
            <ListGroupItem>
              <b className="text-left">Location:</b>
              <p className="text-right">{props.car.location_id}</p>
            </ListGroupItem>
            <ListGroupItem>
              {props.car.is_sold ? (
                <b className="text-success">This vehicle has been sold!</b>
              ) : (
                <b className="text-danger">
                  This vehicle is available for sale!
                </b>
              )}
            </ListGroupItem>
            <ListGroupItem>
              {props.car.is_sold ? `Date of Sale: ${props.car.sold_date}` : ""}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default CarDetails;

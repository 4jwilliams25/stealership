import React from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { updateCar } from "../../store/cars/actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class CarUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: this.props.car.year,
      make: this.props.car.make,
      model: this.props.car.model,
      vin: this.props.car.vin,
      miles: this.props.car.miles,
      price: this.props.car.price,
      location_id: this.props.car.location_id,
      is_sold: this.props.car.is_sold,
      sold_date: this.props.car.sold_date,
      update: 0
    };
  }

  handleChange = (name, e) => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let updatedCar = {
      year: Number(this.state.year),
      make: this.state.make,
      model: this.state.model,
      vin: this.state.vin,
      miles: Number(this.state.miles),
      price: Number(this.state.price),
      location_id: Number(this.state.location_id),
      is_sold: this.state.is_sold === "False" ? false : true,
      sold_date: this.state.sold_date ? this.state.sold_date : null
    };
    this.props.updateCar(this.props.car.id, updatedCar);
  };

  render() {
    return (
      <div>
        <b>Enter Car Updates:</b>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="carYear">Year:</Label>
                <Input
                  required
                  onChange={e => this.handleChange("year", e)}
                  type="text"
                  name="carYear"
                  placeholder={this.state.year}
                />
              </FormGroup>
              <FormGroup>
                <Label for="carMake">Make:</Label>
                <Input
                  required
                  onChange={e => this.handleChange("make", e)}
                  type="text"
                  name="carMake"
                  placeholder={this.state.make}
                />
              </FormGroup>
              <FormGroup>
                <Label for="carModel">Model:</Label>
                <Input
                  required
                  onChange={e => this.handleChange("model", e)}
                  type="text"
                  name="carModel"
                  placeholder={this.state.model}
                />
              </FormGroup>
              <FormGroup>
                <Label for="carVin">VIN:</Label>
                <Input
                  required
                  onChange={e => this.handleChange("vin", e)}
                  type="text"
                  name="carVin"
                  placeholder={this.state.vin}
                />
              </FormGroup>
              <FormGroup>
                <Label for="carMiles">Mileage:</Label>
                <Input
                  required
                  onChange={e => this.handleChange("miles", e)}
                  type="text"
                  name="carMiles"
                  placeholder={this.state.miles}
                />
              </FormGroup>
              <Button color="warning" onClick={this.handleSubmit}>
                <NavLink to="/">Done</NavLink>
              </Button>{" "}
            </Col>
            <Col>
              <FormGroup>
                <Label for="carPrice">Price:</Label>
                <Input
                  required
                  onChange={e => this.handleChange("price", e)}
                  type="text"
                  name="carPrice"
                  placeholder={this.state.price}
                />
              </FormGroup>
              <FormGroup>
                <Label for="carLocation">Location:</Label>
                <Input
                  required
                  onChange={e => this.handleChange("location_id", e)}
                  type="text"
                  name="carLocation"
                  placeholder={this.state.location_id}
                />
              </FormGroup>
              <FormGroup>
                <Label for="carSold">Vehicle is Sold:</Label>
                <Input
                  onChange={e => this.handleChange("is_sold", e)}
                  type="select"
                  name="carSold"
                >
                  <option>{this.state.is_sold ? "True" : "False"}</option>
                  <option>{this.state.is_sold ? "False" : "True"}</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="carDOS">Date of Sale:</Label>
                <Input
                  onChange={e => this.handleChange("sold_date", e)}
                  type="text"
                  name="carDOS"
                  placeholder={this.state.sold_date}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { updateCar }
)(CarUpdate);

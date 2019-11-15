import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import { addCar } from "../../store/cars/actions";
import { connect } from "react-redux";

class AddCarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      year: 0,
      make: "",
      model: "",
      vin: "",
      miles: 0,
      price: 0,
      location_id: 0,
      is_sold: "",
      sold_date: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange = (name, e) => {
    this.setState({
      ...this.state,
      [name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let newCar = {
      year: Number(this.state.year),
      make: this.state.make,
      model: this.state.model,
      vin: this.state.vin,
      miles: Number(this.state.miles),
      price: Number(this.state.price),
      location_id: Number(this.state.location_id),
      is_sold: Boolean(this.state.is_sold === "false" ? "" : 1),
      sold_date: this.state.sold_date ? this.state.sold_date : null
    };
    this.props.addCar(newCar);
  };

  render() {
    return (
      <div>
        <Button outline color="warning" onClick={this.toggle}>
          Add a Car
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New Car Details</ModalHeader>
          <ModalBody>
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
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="carMake">Make:</Label>
                    <Input
                      required
                      onChange={e => this.handleChange("make", e)}
                      type="text"
                      name="carMake"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="carModel">Model:</Label>
                    <Input
                      required
                      onChange={e => this.handleChange("model", e)}
                      type="text"
                      name="carModel"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="carVin">VIN:</Label>
                    <Input
                      required
                      onChange={e => this.handleChange("vin", e)}
                      type="text"
                      name="carVin"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="carMiles">Mileage:</Label>
                    <Input
                      required
                      onChange={e => this.handleChange("miles", e)}
                      type="text"
                      name="carMiles"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="carPrice">Price:</Label>
                    <Input
                      required
                      onChange={e => this.handleChange("price", e)}
                      type="text"
                      name="carPrice"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="carLocation">Location:</Label>
                    <Input
                      required
                      onChange={e => this.handleChange("location_id", e)}
                      type="text"
                      name="carLocation"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="carSold">Vehicle is Sold:</Label>
                    <Input
                      onChange={e => this.handleChange("is_sold", e)}
                      type="select"
                      name="carSold"
                    >
                      <option>false</option>
                      <option>true</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="carDOS">Date of Sale:</Label>
                    <Input
                      onChange={e => this.handleChange("sold_date", e)}
                      type="text"
                      name="carDOS"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.handleSubmit}>
              Add
            </Button>{" "}
            <Button color="dark" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default connect(
  null,
  { addCar }
)(AddCarForm);

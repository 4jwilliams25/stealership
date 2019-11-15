import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { removeCar } from "../../store/cars/actions";
import { connect } from "react-redux";
import { getCars } from "../../store/cars/actions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarDetails from "./CarDetails";
import CarUpdate from "./CarUpdate";

class CarModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      update: 0
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleRemove = id => {
    this.props.removeCar(id);
    window.location.reload();
  };

  render() {
    const carDetails = () => {
      return <CarDetails car={this.props.car} />;
    };
    const carUpdate = () => {
      return <CarUpdate car={this.props.car} />;
    };

    return (
      <Router>
        <div>
          <Button color="warning" onClick={this.toggle}>
            View Details
          </Button>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>Vehicle Details:</ModalHeader>
            <ModalBody>
              <Switch>
                <Route exact path="/" render={carDetails} />
                <Route path="/CarUpdate" render={carUpdate} />
              </Switch>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => this.handleRemove(this.props.car.id)}
                color="danger"
              >
                Remove
              </Button>
              <Button color="dark" onClick={this.toggle}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { removeCar, getCars }
)(CarModal);

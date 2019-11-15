import React from "react";
import "./App.css";
import { Col, Row } from "reactstrap";
import { connect } from "react-redux";
import { getCars } from "./store/cars/actions";
import { getLocations } from "./store/locations/actions";
import TopNav from "./components/layout/TopNav";
import LocationsList from "./components/locations/LocationsList";
import ListOfCars from "./components/cars/ListOfCars";
import Toolbar from "./components/layout/Toolbar";

class App extends React.Component {
  state = {
    viewedLocation: 0
  };

  componentDidMount() {
    this.props.dispatch(getCars());
    this.props.dispatch(getLocations());
  }

  handleLocationClick = id => {
    this.setState({
      viewedLocation: id
    });
  };

  render() {
    return (
      <div className="bg-warning">
        <TopNav />
        <Row>
          <Toolbar />
          <Col sm={6}>
            <LocationsList handleClick={this.handleLocationClick} />
          </Col>
          <Col sm={6}>
            <ListOfCars location={this.state.viewedLocation} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect()(App);

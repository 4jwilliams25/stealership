import React from "react";
import { Label, Input, Row, ListGroup } from "reactstrap";
import { connect } from "react-redux";
import CarItem from "./CarItem";

class ListOfCars extends React.Component {
  state = {
    carSearch: "",
    searchCategory: ""
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      carSearch: e.target.value
    });
  };

  changeSearch = e => {
    this.setState(
      {
        ...this.state,
        searchCategory: e.target.value.toLowerCase()
      },
      () => console.log(this.state.searchCategory)
    );
  };

  render() {
    // console.log("CARTEST:", this.props.cars[0]["year"]);
    const carList =
      this.props.cars[0] &&
      this.props.location &&
      !this.state.carSearch &&
      !this.state.searchCategory
        ? this.props.cars
            .filter(car => car.location_id === this.props.location)
            .map((car, i) => {
              return <CarItem key={i} car={car} />;
            })
        : this.props.cars
            .filter(car => {
              return (
                car.location_id === this.props.location &&
                car[this.state.searchCategory].includes(this.state.carSearch)
              );
            })
            .map((car, i) => {
              return <CarItem key={i} car={car} />;
            });
    return (
      <div>
        <Row className="p-1">
          <Label className="text-dark" for="carSearch">
            <b>Search by:</b>
          </Label>
          <Input
            onChange={this.changeSearch}
            className="w-25"
            name="searchCategory"
            type="select"
          >
            <option>{""}</option>
            <option>Year</option>
            <option>Make</option>
            <option>Model</option>
          </Input>
          <Input
            className="w-50"
            onChange={this.handleChange}
            name="carSearch"
            type="text"
            value={this.state.carSearch}
          />
        </Row>
        <ListGroup>{carList}</ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default connect(mapStateToProps)(ListOfCars);

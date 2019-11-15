import React from "react";
import { ListGroup } from "reactstrap";
import LocationItem from "./LocationItem";
import { connect } from "react-redux";

const LocationsList = props => {
  const locations = props.locations.map((location, i) => {
    return (
      <LocationItem
        key={i}
        location={location}
        handleClick={props.handleClick}
      />
    );
  });

  return (
    <div>
      <ListGroup>{locations}</ListGroup>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    locations: state.locations
  };
};

export default connect(mapStateToProps)(LocationsList);

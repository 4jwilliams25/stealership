import React from "react";
import AddCarForm from "../cars/AddCarForm";
import { Nav, NavItem } from "reactstrap";

const Toolbar = () => {
  return (
    <Nav className="mt-1 w-100 p-1 justify-content-center bg-dark border border-warning">
      <NavItem>
        <AddCarForm />
      </NavItem>
    </Nav>
  );
};

export default Toolbar;

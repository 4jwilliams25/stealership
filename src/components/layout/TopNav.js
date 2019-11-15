import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const TopNav = () => {
  return (
    <div>
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand className="text-warning" href="/">
            Stealership
          </NavbarBrand>
        </Navbar>
      </div>
    </div>
  );
};

export default TopNav;

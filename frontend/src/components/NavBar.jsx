import {Navbar , NavbarBrand} from 'reactstrap'

import React from 'react'

export default function NavBar() {
  return (
    <div className="Navbar" >
      <Navbar light color="primary">
        <NavbarBrand>APDS</NavbarBrand>
        <span>Advance Public Distribution System</span>
      </Navbar>
    </div>
  );
}

import React, { Component } from 'react';  
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap'; 
import {CountryObject} from '../../config/Constants';

function Header (props) {
    console.log('props', props);
    
      return (
          <div>   
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Form inline>
                    {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button> */}
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label style={{ marginRight: 10 }}>Country</Form.Label>
                        <Form.Control as="select" onChange={(value) => props.changeCountry(value)}>                     
                        {CountryObject.map((country) => <option>{country.name}</option> )}
                       
                        </Form.Control>
                    </Form.Group>
                    </Form>
                   
                </Navbar>
          </div>
      )
    }

    export default Header;

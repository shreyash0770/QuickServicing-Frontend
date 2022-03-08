import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";




export default class Header extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }

  render() {
    return (
      <div>
           
        <header>
        <ReactBootStrap.Navbar className="navbar navbar-expand-lg navbar-light bg-overlay">
        <ReactBootStrap.Navbar.Brand ><img src= {require('../images/carlogo.png')} width="60" height="50"></img></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand href="#home">Quick Servicing</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
        
        <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
        <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="#Home">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#Contact Us">Contact Us</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#About Us">About Us</ReactBootStrap.Nav.Link> 
        </ReactBootStrap.Nav>
       
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="Login.js" >Login</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="" disabled>/</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="Login">SignUp</ReactBootStrap.Nav.Link>  
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
    </header>


      </div>
    )
  }
}

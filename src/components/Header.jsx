import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import './services/css/home.css'




export default class Header extends Component {
 
    constructor(props) {
      super(props)
    
      this.state = {
        customers: [] 
      }
      this.signupPage = this.signupPage.bind(this);
      this.loginPage = this.loginPage.bind(this);
    }

    signupPage(){
      this.props.history.push('signup');
  }

  loginPage(){
    this.props.history.push('login');
  }

  render() {
    return (
      <div>
           
        <header>
        <ReactBootStrap.Navbar className="navbar navbar-expand-lg navbar-light bg-overlay">
        <ReactBootStrap.Navbar.Brand ><img src="./images/carlogo.png" width="60" height="50"></img></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand href="#home">Quick Servicing</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
        
        <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
        <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link href="#Home">Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#Contact Us">Contact Us</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link href="#About Us">About Us</ReactBootStrap.Nav.Link> 
        </ReactBootStrap.Nav>
       
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="login" onClick={this.loginPage}>Login</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="" disabled>/</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="signup" onClick={this.signupPage} >SignUp</ReactBootStrap.Nav.Link>  
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
    </header>


      </div>
    )
  }
}

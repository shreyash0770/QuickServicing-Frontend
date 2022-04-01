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
      <div className='header'>
           
        <header>
        <ReactBootStrap.Navbar className="navbar navbar-expand-lg navbar-light bg-dark ">
        <ReactBootStrap.Navbar.Brand ><img src="./images/carlogo.png" width="60" height="50"></img></ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Brand style={{color:'white'}} href="#home">Quick Servicing</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
        
        <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
        <ReactBootStrap.Nav className="me-auto">
        <ReactBootStrap.Nav.Link className='click' href="/"style={{color:'white'}} >Home</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link className='click' href="/Contact" style={{color:'white'}} >Contact Us</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link className='click' href="/About" style={{color:'white'}} >About Us</ReactBootStrap.Nav.Link> 
        </ReactBootStrap.Nav>
       
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link className='click' href="login" style={{color:'white'}}  onClick={this.loginPage}>LOGIN</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link  href="" style={{color:'white'}} disabled>/</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link className='click' href="signup" style={{color:'white'}} onClick={this.signupPage} >SIGNUP</ReactBootStrap.Nav.Link> 
          <ReactBootStrap.Nav.Link className='click' href="/" style={{color:'white'}}> LOGOUT</ReactBootStrap.Nav.Link> 
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
    </header>


      </div>
    )
  }
}


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import Backround from './Component/Backround';
import {Container} from "react-bootstrap";
import '../src/images/Wallpaper.jpg'
import Cards from './Component/Cards';
import Login from './Component/Login';




function App() {
  return (
    <div className="App">
      <div className="Container">
        
    <ReactBootStrap.Navbar className="navbar navbar-expand-lg navbar-light bg-overlay">
    <ReactBootStrap.Navbar.Brand ><img src= {require('../src/images/carlogo.png')} width="60" height="50"></img></ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Brand href="#home">Quick Servicing</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-ReactBootStrap.Navbar-ReactBootStrap.Nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#Home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Contact Us">Contact Us</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#About Us">About Us</ReactBootStrap.Nav.Link> 
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="Login.js" onClick={<Login/>}>Login</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="" disabled>/</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="Login">SignUp</ReactBootStrap.Nav.Link>  
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>  
</ReactBootStrap.Navbar>
</div>
  <figcaption>            
                <div className="active-pink-3 active-pink-4 mb-12">
                    <input className="form-control col-md-8" type="text" placeholder="Search" aria-label="Search" />      
                 </div>
   </figcaption>

<Backround />

</div>

  );
}

export default App;

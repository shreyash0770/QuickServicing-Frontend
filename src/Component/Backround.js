import React from 'react'
import '../images/Wallpaper.jpg'
import * as ReactBootStrap from "react-bootstrap";
import { MDBCol } from 'mdbreact';
import '../Component/Custom.css'
import { Container } from "react-bootstrap";
import { Button } from 'bootstrap';


export default function () {
  return (
    <div>
      
        <figure className="position-relative">
          <fig>
             <img src={require('../images/mainback.png')} width="100%"  ></img>
          </fig>
             
        </figure>       
    </div>
  )
}

import React, { Component } from 'react'
import '../Component/Custom.css';


export default class Backround extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  render() {
    return (
     <div>
         <figure className="position-relative">
            <fig>
                <img src={require('../images/mainback.png')}  style={{width: "100%"}} ></img>
            </fig>
           
         </figure>       
    </div>
    )
  }
}

import React, { Component } from 'react'
import * as ReactBootStrap from "react-bootstrap";

export default class Signup extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      this.customerSignupPage = this.customerSignupPage.bind(this);

    }

    customerSignupPage(){
      this.props.history.push('add-customer');
    }

  render() {
    return (
      <div className='container'>
          <div class="row">
  <div class="col-sm-6">
    <div class="card" style={{backgroundColor:"lightgray",marginTop: "60px"}}>
      <div class="card-body">
        <h5 class="card-title">Customer SignUp</h5>
        <p class="card-text">Fill your information below and get best services.</p>
        <a href="add-customer" onClick={this.customerSignupPage} class="btn btn-info">Sign Up</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{backgroundColor:"lime",marginTop: "60px"}}>
      <div class="card-body">
        <h5 class="card-title">Services SignUp</h5>
        <p class="card-text">Fill your information below and serve your best.</p>
        <a href="#" class="btn btn-success">Sign Up</a>
      </div>
    </div>
  </div>
</div>
      </div>
    )
  }
}

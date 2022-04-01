import React, { Component } from 'react'
import { useHistory } from "react-router-dom";

import CustomerService from '../services/CustomerService'

export default class AddCustomer extends Component {
constructor(props) {
  super(props)

  this.state = {
    name:'',
    email:'',
    city:'',
    address:'',
    pincode:'',
    mobile:'',
    password:''
     
  }
  this.changeNameHandler = this.changeNameHandler.bind(this);
  this.changeEmailHandler= this.changeEmailHandler.bind(this);
  this.changeCityHandler= this.changeCityHandler.bind(this);
  this.changeAddressHandler= this.changeAddressHandler.bind(this);
  this.changePincodeHandler= this.changePincodeHandler.bind(this);
  this.changeMobileHandler= this.changeMobileHandler.bind(this);
  this.changePasswordHandler= this.changePasswordHandler.bind(this);
  this.registerCustomer= this.registerCustomer.bind(this);


  
}

registerCustomer=(e)=>{
    e.preventDefault();
    let customer = {c_Name:this.state.name,c_Email:this.state.email,c_City:this.state.city,c_Address:this.state.address,
        c_Pincode:this.state.pincode,c_mobile:this.state.mobile,c_Password:this.state.password};
      console.log('customer =>' + JSON.stringify(customer));

      CustomerService.createCustomer(customer).then(res =>{
        //   this.props.history.push('/login');
          window.location.href = "/login";
      });
}

changeNameHandler =(event) => {
   this.setState({name:event.target.value});
}

changeEmailHandler=(event) =>{
    this.setState({email:event.target.value});
}

changeCityHandler=(event) =>{
    this.setState({city:event.target.value});
}

changeAddressHandler=(event) =>{
    this.setState({address:event.target.value});
}

changePincodeHandler=(event) =>{
    this.setState({pincode:event.target.value});
}

changeMobileHandler=(event) =>{
    this.setState({mobile:event.target.value});
}

changePasswordHandler=(event) =>{
    this.setState({password:event.target.value});
}

cancel(){
    
    window.location.href = "/login";
}

  render() {
    return (
        <div className='addcustomer'>
            <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'  style={{marginTop: "60px",marginBottom: "70px"}} >
        <form style={{backgroundColor:"aliceblue"}}>
  
        <h3 className='text-center ' style={{marginTop:"10px"}} >CREATE AN ACCOUNT</h3>

        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter name" name='name' 
            value={this.state.name} onChange={this.changeNameHandler} />
        </div>

        <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" name='email'
            value={this.state.email} onChange={this.changeEmailHandler} />
        </div>

        <div className="form-group">
            <label>City</label>
            <input type="text" className="form-control" placeholder="Enter city"  name='city'
            value={this.state.city} onChange={this.changeCityHandler}/>
        </div>

        <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="Enter address" name='address'
            value={this.state.address} onChange={this.changeAddressHandler}/>
        </div>

        <div className="form-group">
            <label>Pincode</label>
            <input type="number" className="form-control" placeholder="Enter pincode" name='pincode'
              value={this.state.pincode} onChange={this.changePincodeHandler}/>
        </div>

        <div className="form-group">
            <label>Mobile</label>
            <input type="number" className="form-control" placeholder="Enter mobile number" name='mobile'
             value={this.state.mobile} onChange={this.changeMobileHandler}/>
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" name='password'
            value={this.state.password} onChange={this.changePasswordHandler} />
        </div>

        <button  className="btn btn-success " onClick={this.registerCustomer}>Register</button>
        <a className="btn btn-danger" href="login" onClick={this.cancel} style={{marginLeft:"10px"}} >Cancel</a>
        <p className="forgot-password text-right">
            Already registered <a href="login">log in?</a>
        </p>
    </form>
    </div>
    </div>
    </div>
    </div>
    )
  }
}
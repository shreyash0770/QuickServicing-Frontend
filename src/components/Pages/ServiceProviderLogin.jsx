import React, { Component } from 'react'
import '../services/css/home.css'



export default  class ServiceProviderLogin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
      this.customerLogin = this.serviceProviderLogin.bind(this);
    }

    serviceProviderLogin(){
      this.props.history.push('serviceProviderPage');
      
    }

  render() {
    return (
       

      <div className='ServiceProviderLogin'>
        <section className="vh-100" >
       <div className="container py-4 h-40" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="" >
     
          <div className="ServiceProvidercard p-5 text-center "  >
            
            <h1 style={{color:'whitesmoke'}}>QuickServicing.com</h1>
            <h3 className="mb-5" style={{color:'InfoBackground'}} >Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='email'/>
             
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='password' />
      
            </div>
            <a href="serviceProviderPage" onClick={this.serviceProviderLogin} className="btn btn-info">Log In</a>

            

          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>

</div>

   
    )
  }
}

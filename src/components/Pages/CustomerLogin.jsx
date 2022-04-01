import React, { Component } from 'react'
import '../services/css/home.css'



export default  class CustomerLogin extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
      this.customerLogin = this.customerLogin.bind(this);
    }

    customerLogin(){
      this.props.history.push('customerpage');
      
    }

  render() {
    return (
       

      <div className='customerlogin'>
        <section className="vh-100" >
       <div className="container py-4 h-40" >
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="" >
     
          <div className="customercard p-5 text-center "  >
            
            <h1 style={{color:'white'}}>QuickServicing.com</h1>
            <h3 className="mb-5" style={{color:'orange'}} >Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder='email'/>
             
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder='password' />
      
            </div>
            <a href="customerpage" onClick={this.customerLogin} className="btn btn-info">Log In</a>

            

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

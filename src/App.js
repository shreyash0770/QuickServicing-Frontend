import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Constants/Footer'
import CustomerList from './components/Admin/CustomerList';
import AddCustomer from './components/Admin/AddCustomer';
import UpdateCustomer from './components/Admin/UpdateCustomer';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import AdminLogin from './components/Pages/AdminLogin';
import AdminPage from './components/Admin/AdminPage';
import ServiceProvidersList from './components/Admin/ServiceProvidersList';
import ServiceProviderSignUp from './components/Pages/ServiceProviderSignup';
import CustomerLogin from './components/Pages/CustomerLogin';
import CustomerPage from './components/Customer/CustomerPage';
import ServiceProviderPage from './components/ServiceProvider/ServiceProviderPage';
import ServiceProviderLogin from './components/Pages/ServiceProviderLogin';
import Homepage from './components/Constants/Homepage';
import ContactUS from './components/Constants/ContactUS';
import Aboutus from './components/Constants/Aboutus';
import VehicleRegistration from './components/Customer/VehicleRegistration';





function App() {
  return (
    <div>
     
     
          <Header />
            <div className='App'>
              <Routes>

               <Route  exact path='/' element={<Homepage />} ></Route>
               <Route  exact path='/Contact' element={<ContactUS />} ></Route>
               <Route  exact path='/About' element={<Aboutus />} ></Route>

                <Route   path="/customers" element = {<CustomerList />} ></Route>
                <Route  exact path="/add-customer" element = {<AddCustomer />}></Route>
                <Route  exact path="/update-customer/:id" element = {<UpdateCustomer />}></Route>
                <Route  exact path="/signup" element = {<Signup />}></Route>
                <Route  exact path="/login" element = {<Login />}></Route>
                <Route  exact path="/adminlogin" element = {<AdminLogin /> }></Route>
                <Route  exact path="/adminpage" element = {<AdminPage />}></Route>
                <Route   path='/ServiceProviders' element={<ServiceProvidersList />}></Route>
                <Route  exact path='/ServiceProviderSignUp' element={<ServiceProviderSignUp />}></Route>
                <Route exact path='/customerLogin' element={<CustomerLogin />}></Route>
                <Route exact path='/customerpage' element={<CustomerPage />}></Route>
                <Route exact path='/serviceProviderLogin' element={<ServiceProviderLogin />}></Route>
                <Route exact path='/serviceProviderPage' element={<ServiceProviderPage/>}></Route>
                <Route exact path='/vehicle' element={<VehicleRegistration />}></Route>
                
              </Routes>
            </div>
          <Footer />
     

      
    </div>

  );
}

export default App;

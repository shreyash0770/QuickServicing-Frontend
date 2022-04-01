import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import CustomerList from './components/Admin/CustomerList';
import AddCustomer from './components/Admin/AddCustomer';
import UpdateCustomer from './components/Admin/UpdateCustomer';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import AdminLogin from './components/Pages/AdminLogin';
import AdminPage from './components/Admin/AdminPage';
import ServiceProvidersList from './components/Admin/ServiceProvidersList';




function App() {
  return (
    <div>
     
     
          <Header />
            <div className='App'>
              <Routes>
                <Route   path="/customers" element = {<CustomerList />} ></Route>
                <Route  exact path="/add-customer" element = {<AddCustomer />}></Route>
                <Route  exact path="/update-customer/:id" element = {<UpdateCustomer />}></Route>
                <Route  exact path="/signup" element = {<Signup />}></Route>
                <Route  exact path="/login" element = {<Login />}></Route>
                <Route  exact path="/adminlogin" element = {<AdminLogin /> }></Route>
                <Route  exact path="/adminpage" element = {<AdminPage />}></Route>
                <Route   path='/ServiceProviders' element={<ServiceProvidersList />}></Route>

              </Routes>
            </div>
          <Footer/>
     

      
    </div>

  );
}

export default App;

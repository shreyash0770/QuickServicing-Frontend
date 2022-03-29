import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import '../src/images/mainback.png';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomerList from './components/Admin/CustomerList';
import AddCustomer from './components/Admin/AddCustomer';
import UpdateCustomer from './components/Admin/UpdateCustomer';
import Signup from './components/Pages/Signup';



function App() {
  return (
    <div>
      <Router>
        
          <Header />
            <div className='container'>
              <Switch>
                <Route path="/customers" component = {CustomerList}></Route>
                <Route path="/add-customer" component = {AddCustomer}></Route>
                <Route path="/update-customer/:id" component = {UpdateCustomer}></Route>
                <Route path="/signup" component = {Signup}></Route>
                
                
              </Switch>
            </div>
          <Footer/>
          
       
       </Router>
    </div>

  );
}

export default App;

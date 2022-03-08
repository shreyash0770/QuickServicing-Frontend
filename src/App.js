import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Backround from './Component/Backround';
import Search from './Component/Search';
import '../src/images/mainback.png';

function App() {
  return (
    <div >
    <Router>
     
      <Header />
         <div className="container">
           <Switch>
              <Search />
              <Backround/>
            </Switch>
              
   
         </div>
      <Footer/>
      
    </Router>
  </div>


  );
}

export default App;

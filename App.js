import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/pages/Footer/Footer';
import GrievanceForm from './components/pages/form/GrievanceForm';
import Dashboard from './components/pages/AdminDashboard/Dashboard';
import MainPage from './components/pages/AdminLogin/MainPage';

function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      <Route path='/form' element ={<GrievanceForm/>}/>
      <Route path ='/dashboard' element = {<Dashboard/>}/>
      <Route path ='/login' element = {<MainPage/>}/>
     </Routes>
     <Footer/>
      
     
    </Router>
  );
}

export default App;

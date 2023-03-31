import React from 'react'
import BMIResult from "../components/BMIResult";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function Result() {
  return (
    <div>
        <Navbar/>
        <BMIResult/>
        <Footer/>
    </div>
  )
}

export default Result
import React from 'react'
import BMICalculate from "../components/BMICalculate";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
function Home() {
  return (
    <div>
      <Navbar/>
      <BMICalculate/>
      <Footer/>
    </div>
  )
}

export default Home
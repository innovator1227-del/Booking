import React from 'react'
import Login from './page/Login'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Ticket from './page/Ticket'
import Home from './page/Home'
import Footer from './component/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './page/About'
import Service from './page/Service'
import Bus from './page/Bus'


const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false, 
    });
  }, []);

  return (
    <div>
      <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Ticket' element={<Ticket />} />
      <Route path='/About' element={<About />} />
      <Route path='/Service' element={<Service />} />
      <Route path="/Bus" element={<Bus />} />
     </Routes>
     <Footer />
    </div>
  )
}

export default App

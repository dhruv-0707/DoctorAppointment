import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HOME from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Contact from './pages/contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom';


<Router basename="/DoctorAppointment/">
  
</Router>


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
    <Navbar />
    <Routes>
      <Route path='/' element={<HOME />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:speciality' element={<Doctors />} />
      <Route path='/login' element={<Login />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/my-appointments' element={<MyAppointments />} />
      <Route path='/appointment/:docId' element={<Appointment />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
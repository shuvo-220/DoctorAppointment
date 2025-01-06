import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Login from './components/login/Login';
import Register from './components/register/Register';
import DoctorDetails from './components/doctorDetails/DoctorDetails';
import Contact from './components/contact/Contact';
import ProtectedRoute from './components/protect/ProtectedRoute';
import PublicRoute from './components/protect/PublicRoute';

function App() {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:400
    })
    AOS.refresh()
  },[])

  return (
    <>
     <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path='/register' element={<Register />} />
          <Route path='/doctor/:id' element={<DoctorDetails />} />

          <Route path='/contact' element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          } />

        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import './index.css'
import Layout from "./Layout";
import About from './Components/About';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Feedback from './Components/Feedback';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Router>
    <Routes>

      <Route path='/' element={<Layout/>}></Route>
      <Route path='/about-us' element={<About/>}></Route>
      <Route path='/our-services' element={<Services/>}></Route>
      <Route path='/our-gallery' element={<Gallery/>}></Route>
      <Route path='/feedback' element={<Feedback/>}></Route>
      <Route path='/contact-us' element={<Contact/>}></Route>
    </Routes>
   </Router>
  </StrictMode>,
)

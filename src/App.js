import './App.css';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/Skills/Skills';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import ProjectDetails from './Pages/ProjectDetails/ProjectDetails';
import ScrollToTop from './utils/ScrollToTop';
import Blogs from './Pages/Blogs/Blogs';
import Services from './Pages/Services/Services';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import SmartFuryDetails from './Pages/ProjectDetails/SmartFuryDetails';



function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      anchorPlacement: 'center-center'
    })
  })
  return (
    <Router>
      <ScrollToTop/>
      <Navigation/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/skills' element={<Skills/>}></Route>
       <Route path='/project/smartFury' element={<SmartFuryDetails/>} />
       <Route path='/blogs' element={<Blogs/>} />
       <Route path='/services' element={<Services/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

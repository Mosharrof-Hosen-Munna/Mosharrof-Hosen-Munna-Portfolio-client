import './App.css';
import {Routes,Route,BrowserRouter as Router} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Skills from './Pages/Skills/Skills';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/skills' element={<Skills/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

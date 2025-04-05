import { Routes, Route } from 'react-router-dom';
import ColorCode from './Components/ColorCodeGen/ColorCode'
import Home from './Pages/Header';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';


function App() {
  return (
    <>
    <Home/>
      <Routes>
        <Route path='/' element={<ColorCode />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  )
}

export default App

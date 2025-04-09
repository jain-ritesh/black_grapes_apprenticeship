import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home"
import Register from "./components/RegisterFrom"
import Content from './components/Content';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import Content5 from './components/Content5';
import Content6 from './components/Content6';
import Content7 from './components/Content7';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms_Condition from './components/Terms_Condition';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="/content2" element={<Content2 />} />
        <Route path="/content3" element={<Content3 />} />
        <Route path="/content4" element={<Content4 />} />
        <Route path="/content5" element={<Content5 />} />
        <Route path="/content6" element={<Content6 />} />
        <Route path="/content7" element={<Content7 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-condition" element={<Terms_Condition />} />
      </Routes>
    </Router>
  )
}

export default App

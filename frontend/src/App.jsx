// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Register from "./components/RegisterFrom";
import Privacy from './components/Privacy';
import Terms_Condition from './components/Terms_Condition';
import Demat_Acc from './components/Demat_Acc';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/privacy-policy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms-condition" element={<Layout><Terms_Condition /></Layout>} />
        <Route path="/demat-account" element={<Layout><Demat_Acc /></Layout>} />
        {/* Add more routes as required using the Layout wrapper */}
      </Routes>
    </Router>
  );
}

export default App;

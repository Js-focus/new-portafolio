import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer, NavBar } from './components';
import { About, Contact, Home, Projects } from './pages';

function App() {
  return (
    <HashRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      
      <Footer />
    </HashRouter>
  );
}

export default App;

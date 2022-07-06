import Main from './pages/Main'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Neworks from './pages/Neworks';
import { useState } from 'react';
import Social from './components/Social';
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Bot from './components/Bot';

function App() {
  const [modal, setModal] = useState(false)
  return (
    <>
      
    <Router>
            <Social />
            <Navbar />
      <Routes>

        <Route path='/' element={<Main setModal={setModal} />} />
        <Route path='/new-works' element={<Neworks />} />
        
      </Routes>
        <Contacts setModal={setModal} />
        <Bot modal={modal} setModal={setModal} />
    </Router>

    </>
  );
}

export default App;

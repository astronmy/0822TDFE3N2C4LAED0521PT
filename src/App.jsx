import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CharacterDetail from './components/CharacterDetail';
import CharacterList from './components/CharacterList';
import Header from './components/Header';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  const [authenticated, setAuthenticated] = useState(true)

  return (
    <BrowserRouter>
      <Header authenticated={authenticated} />
      <Routes>
        <Route path="/" element={<ProtectedRoutes authenticated={authenticated} />} >
          <Route path="/" element={<Navigate to={`/characters`} replace />} />
          <Route path="/characters" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />}>
            <Route path='info' element={<h4 style={{ color: 'white', textAlign: 'center' }}>Mas Info </h4>} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

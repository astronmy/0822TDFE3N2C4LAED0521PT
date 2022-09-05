import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CharacterDetail from './components/CharacterDetail';
import CharacterList from './components/CharacterList';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:data" element={<CharacterDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CharacterDetail from './components/CharacterDetail';
import CharacterList from './components/CharacterList';
import Header from './components/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route exact path="/characters" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />}>
              <Route path='info' element={<h4 style={{color: 'white', textAlign: 'center'}}>Mas Info </h4>}/>
          </Route>
          <Route path='*' element={<h4 style={{color: 'white', textAlign: 'center'}}>Not Found </h4>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

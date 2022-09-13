import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CounterApp from './components/CounterApp';
import Header from './components/Header';
import { MyContextProvider } from './context/MyContext';

function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element={<CounterApp quantity={10} />} />
        </Routes>
      </BrowserRouter>
    </MyContextProvider>
  )
}

export default App;

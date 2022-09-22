import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductContainer from './components/ProductContainer';
import ProductDetail from './components/ProductDetail';
import Context, { CartContextProvider } from './context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar title="ECommerce"/>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<ProductContainer />}></Route>
            <Route path='/products/:id' element={<ProductDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;

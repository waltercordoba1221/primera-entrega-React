import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito'
import Checkout from './components/Checkout';

const App = () => {

  return (
<div>
     <CartProvider>
       <BrowserRouter>
        <Navbar/> 
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route exact path='/productos' element={<ItemListContainer/>}/>
          <Route exact path='/productos/:categoria' element={<ItemListContainer/>}/>
          <Route exact path='/carrito' element={<Carrito/> }/>
          <Route exact path='/checkout' element={<Checkout/> }/>

        </Routes>
      </BrowserRouter>
      </CartProvider>
</div>
      
    
  )
}

export default App
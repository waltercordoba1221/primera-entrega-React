import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nosotros from './components/nosotros'

const App = () => {
  return (
    
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/productos' element={<ItemListContainer/>}/>
        <Route exact path='/productos/:categoria' element={<ItemListContainer/>}/>
        <Route exact path='/Nosotros' element={<Nosotros/> }/>

      </Routes>
      </BrowserRouter>
    
  )
}

export default App
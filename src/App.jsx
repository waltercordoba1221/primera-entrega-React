import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/productos/' element={<ItemDetailContainer/>}/>
        <Route exact path='/productos/:categoria' element={<ItemDetailContainer/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
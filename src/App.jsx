import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import { Center } from '@chakra-ui/react'
const App = () => {
  return (
    <div>
      
      <Navbar />
      <Center bg='tomato' h='100px' color='white'>
  Bienvenidos
</Center>
  
    </div>
  )
}

export default App
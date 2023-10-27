import React from 'react'
import Cartwidget from './cartwidget'
import { Menu, MenuButton, MenuList, MenuItem ,Flex ,Box, Spacer } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <div>
        
        
        <Flex>
  <Box p='4'>
  <h3>Tienda de ropa</h3>
  </Box>
  <Spacer />
  <Menu>
  <MenuButton>
    Categoria
  </MenuButton>
  <MenuList>
    <MenuItem>A</MenuItem>
    <MenuItem>B</MenuItem>
    <MenuItem>C</MenuItem>
  </MenuList>
</Menu>
  <Spacer />
  <Box p='4'>
  <Cartwidget />
  </Box>
</Flex>

        
    </div>
  )
}

export default Navbar
import React from 'react'
import Cartwidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
      <Flex>
  <Box>
     <Link to={"/"}> <img src="logo.png" width={50} alt="" /></Link>
  </Box>
  <Spacer />
  <Menu>
   <MenuButton>
    Categorias
   </MenuButton>
   <MenuList>

    
    <Link to='/productos/Hombres' >
    <MenuItem>Hombres</MenuItem>
    </Link>
    <Link to='/productos/Mujeres'>
    <MenuItem>Mujer</MenuItem>
    </Link>
    
    <Link to='/productos/Zapatillas'>
    <MenuItem>Zapatillas</MenuItem>
    </Link>
  </MenuList>
</Menu>
  <Spacer/>
  <Box>
      <Cartwidget/>
  </Box>
</Flex>
  )
}

export default Navbar
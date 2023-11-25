import React from 'react'
import Cartwidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
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
    <Link to="/producto/A" >
    <MenuItem>A</MenuItem>
    </Link>
    <Link to="/producto/B">
    <MenuItem>B</MenuItem>
    </Link>
    <Link to="/producto/C">C</Link>
  </MenuList>
</Menu>
  <Spacer/>
  <Box>
      <Cartwidget/>
  </Box>
</Flex>
  
    </div>
  )
}

export default Navbar
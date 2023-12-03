import { chakra, Box, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export const MenuWrap = chakra(Box, {
  baseStyle: {
    position: 'relative'
  }
})

export const MenuDropdown = chakra(Menu, {})

export const MenuDropdownButton = chakra(MenuButton, {})

export const MenuDropdownMask = chakra(Box, {
  baseStyle: {
    position: 'absolute',
    top: '40px',
    paddingTop: '8px',
    div: {
      position: 'relative',
      paddingTop: '8px'
    }
  }
})

export const MenuDropdownList = chakra(MenuList, {})

export const MenuDropDownItem = chakra(MenuItem, {})

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
      marginTop: '-8px',
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none'
    }
  }
})

export const MenuDropdownList = chakra(MenuList, {
  baseStyle: {}
})

export const MenuDropDownItem = chakra(MenuItem, {
  baseStyle: {
    backgroundColor: 'white',
    color: 'black',
    _first: {
      marginTop: '16px',
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px'
    },
    _last: {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px'
    }
  }
})

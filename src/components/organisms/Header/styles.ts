import { StyleUtils } from '@/common/utils'
import { Box, Container, chakra } from '@chakra-ui/react'

export const HeaderWrap = chakra(Box, {
  baseStyle: {
    ...StyleUtils.adjustFlex('flex', 'row', 'center', 'center'),
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '60px',
    zIndex: 1050,
    backgroundColor: 'transparent'
  }
})

export const HeaderContainer = chakra(Container, {
  baseStyle: {
    ...StyleUtils.adjustFlex('flex', 'row', 'space-between', 'center'),
    width: '100%'
  }
})

export const HeaderLogo = chakra(Box, {
  baseStyle: {}
})

export const HeaderNavigation = chakra(Box, {
  baseStyle: {}
})

export const HeaderTheme = chakra(Box, {
  baseStyle: {}
})

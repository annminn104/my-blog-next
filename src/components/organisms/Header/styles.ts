import { StyleUtils } from '@/common/utils'
import { Box, chakra } from '@chakra-ui/react'

export const HeaderWrap = chakra(Box, {
  baseStyle: {
    ...StyleUtils.adjustFlex('flex', 'row', 'space-between', 'center')
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

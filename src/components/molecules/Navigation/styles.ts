import { Box, chakra } from '@chakra-ui/react'
import { StyleUtils } from '@/common/utils'

export const NavWrap = chakra(Box, {
  baseStyle: {
    ...StyleUtils.adjustFlex('flex', 'row', 'center', 'center'),
    columnGap: '8px'
  }
})

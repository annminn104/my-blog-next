import Header from '@/components/organisms/Header'
import { Box, Container, chakra } from '@chakra-ui/react'

export const MainLayoutWrap = chakra(Container, {
  baseStyle: {}
})

export const MainLayoutHeader = chakra(Header, {
  baseStyle: {}
})

export const MainLayoutContent = chakra(Box, {
  baseStyle: {
    paddingTop: '60px',
    minHeight: 'calc(100vh - 60px)'
  }
})

import { ComponentStyleConfig, defineStyle } from '@chakra-ui/react'

const arrowIconButton = defineStyle({
  borderRadius: 'full',
  background: 'transparent',
  height: '85px',
  width: '85px',
  color: 'white',
  fontSize: '60px',
  _hover: {
    background: 'whiteAlpha.100'
  }
})

export const Button: ComponentStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: { arrowIconButton },
  defaultProps: {}
}

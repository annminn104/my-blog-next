import { StyleUtils } from '@/common/utils'
import { Box, chakra, Container, Heading, Image, Text } from '@chakra-ui/react'

export const SliderItemWrap = chakra(Box, { baseStyle: {} })

export const SliderItemBackground = chakra(Image, {
  baseStyle: {
    height: '100vh'
  }
})

export const SliderText = chakra(Container, {
  baseStyle: {
    position: 'absolute',
    top: '50%',
    width: '100%',
    transform: 'translateY(-50%)'
  }
})

export const SliderItemTag = chakra(Heading, {
  baseStyle: {
    ...StyleUtils.fontBase('24px', 1.2, 900)
  }
})

export const SliderItemTitle = chakra(Heading, {
  baseStyle: {
    ...StyleUtils.fontBase('8vw', 'normal', 900),
    marginLeft: '-12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
})

export const SliderItemContent = chakra(Text, { baseStyle: { fontSize: 'xl', color: 'whiteAlpha.700' } })

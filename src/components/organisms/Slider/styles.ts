import { StyleUtils } from '@/common/utils'
import ArrowButton from '@/components/atoms/ArrowButton'
import SliderItem from '@/components/molecules/SliderItem'
import { chakra, Box, Container, Text } from '@chakra-ui/react'

export const SwiperWrap = chakra(Box, {
  baseStyle: {
    position: 'absolute',
    inset: 0
  }
})

export const SwiperItem = chakra(SliderItem, {})

export const SwiperArrow = chakra(Container, {
  baseStyle: {
    ...StyleUtils.adjustFlex('flex', 'row', 'space-between', 'center'),
    position: 'absolute',
    bottom: '10%',
    zIndex: 2
  }
})

export const SwiperArrowBtn = chakra(ArrowButton, {
  baseStyle: {}
})

export const SwiperIndex = chakra(Text, {
  baseStyle: {
    ...StyleUtils.fontBase(20, 24, 600),
    bottom: '12%',
    left: '50%',
    zIndex: 2,
    position: 'fixed',
    color: 'whiteAlpha.500'
  }
})

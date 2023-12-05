import { StyleUtils } from '@/common/utils'
import ArrowButton from '@/components/atoms/ArrowButton'
import SliderItem from '@/components/molecules/SliderItem'
import { chakra, Box, Container } from '@chakra-ui/react'

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

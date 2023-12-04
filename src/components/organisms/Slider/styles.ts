import SliderItem from '@/components/molecules/SliderItem'
import { chakra, Box } from '@chakra-ui/react'

export const SwiperWrap = chakra(Box, {
  baseStyle: {
    position: 'absolute',
    inset: 0
  }
})

export const SwiperItem = chakra(SliderItem, {})

'use client'

import React, { useState } from 'react'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Mousewheel, Parallax } from 'swiper/modules'
import * as S from './styles'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import { SliderMock } from '@/common/mocks/slider'
import { Box, Icon } from '@chakra-ui/react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

function Slider() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const handleActiveIndexSlide = (element: SwiperClass) => {
    console.log(element)
    setActiveIndex(element.realIndex)
  }

  console.log('activeIndex', activeIndex)

  return (
    <S.SwiperWrap>
      <Swiper
        slidesPerView={1}
        speed={1500}
        onActiveIndexChange={handleActiveIndexSlide}
        loop
        parallax
        mousewheel
        navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
        pagination={{ type: 'progressbar' }}
        modules={[Pagination, Navigation, Mousewheel, Parallax]}
        className='swiper-slider__fullscreen'
      >
        {SliderMock.map((slide, index) => (
          <SwiperSlide key={index}>
            <S.SwiperItem {...slide} />
          </SwiperSlide>
        ))}
        <S.SwiperArrow maxW='full'>
          <S.SwiperArrowBtn situation='left' className='arrow-left' icon={<Icon as={FiArrowLeft} />} />
          <S.SwiperArrowBtn situation='right' className='arrow-right' icon={<Icon as={FiArrowRight} />} />
        </S.SwiperArrow>
      </Swiper>
      <S.SwiperIndex>
        {activeIndex}/{SliderMock.length}
      </S.SwiperIndex>
    </S.SwiperWrap>
  )
}

export default Slider

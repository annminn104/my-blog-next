'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Mousewheel, Parallax } from 'swiper/modules'
import * as S from './styles'

import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'
import { SliderMock } from '@/common/mocks/slider'

function Slider() {
  return (
    <S.SwiperWrap>
      <Swiper
        slidesPerView={1}
        speed={1500}
        loop
        parallax
        mousewheel
        navigation
        pagination={{ type: 'progressbar' }}
        modules={[Pagination, Navigation, Mousewheel, Parallax]}
        className='swiper-slider__fullscreen'
      >
        {SliderMock.map((slide, index) => (
          <SwiperSlide key={index}>
            <S.SwiperItem {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.SwiperWrap>
  )
}

export default Slider

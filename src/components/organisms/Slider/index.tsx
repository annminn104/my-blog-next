'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
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
        spaceBetween={30}
        loop={true}
        pagination={{
          type: 'progressbar'
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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

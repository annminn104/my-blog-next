'use client'

import React from 'react'
import Image from 'next/image'
import * as S from './styles'
import { SlideTypeEnum } from '@/common/enums'

interface ISliderItemProps {
  type: SlideTypeEnum
  src: string
  tag: string
  title: string
  content: string
  button: {
    name: string
    route: string
  }
}

function SliderItem({ type, src, tag, title, content, button }: ISliderItemProps) {
  return (
    <S.SliderItemWrap>
      {renderImageWithType(type, src, title)}
      <S.SliderText maxW='full'>
        <S.SliderItemTag as='h3' data-swiper-parallax='3000'>
          {tag}
        </S.SliderItemTag>
        <S.SliderItemTitle as='h1' data-swiper-parallax='3000'>
          {title}
        </S.SliderItemTitle>
        <S.SliderItemContent dangerouslySetInnerHTML={{ __html: content }} data-swiper-parallax='3000' />
      </S.SliderText>
    </S.SliderItemWrap>
  )
}

function renderImageWithType(type: SlideTypeEnum, src: string, title: string): JSX.Element {
  const render: Record<SlideTypeEnum, JSX.Element> = {
    [SlideTypeEnum.Image]: (
      <S.SliderItemBackground
        as={Image}
        src={src}
        layout='fill'
        objectFit='cover'
        quality={100}
        alt={title}
        loading='lazy'
      />
    ),
    [SlideTypeEnum.Video]: <></>
  }

  return render[type] || null
}

export default SliderItem

'use client'

import React from 'react'
import { HeaderNavigationMock } from '@/common/mocks'
import NavItem from '../NavItem'
import * as S from './styles'

function Navigation() {
  return (
    <S.NavWrap>
      {HeaderNavigationMock.map((nav, index) => (
        <NavItem {...nav} key={index} isHover />
      ))}
    </S.NavWrap>
  )
}

export default Navigation

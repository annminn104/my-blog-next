'use client'

import React from 'react'
import * as S from './styles'

export default function MainClientComponent({ children }: { children: React.ReactNode }) {
  return (
    <S.MainLayoutWrap as='div' maxW='full'>
      <S.MainLayoutHeader />
      <S.MainLayoutContent>{children}</S.MainLayoutContent>
    </S.MainLayoutWrap>
  )
}

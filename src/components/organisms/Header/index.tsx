'use client'

import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Icon, MoonIcon, SunIcon } from '@chakra-ui/icons'
import Logo from '@/components/molecules/Logo'
import { ModeEnum } from '@/common/enums'
import * as S from './styles'
import Navigation from '@/components/molecules/Navigation'

function Header() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <S.HeaderWrap as='header'>
      <S.HeaderLogo>
        <Logo />
      </S.HeaderLogo>
      <S.HeaderNavigation>
        <Navigation />
      </S.HeaderNavigation>
      <S.HeaderTheme as='button' onClick={toggleColorMode}>
        <Icon as={colorMode === ModeEnum.Light ? MoonIcon : SunIcon} boxSize={22} />
      </S.HeaderTheme>
    </S.HeaderWrap>
  )
}

export default Header

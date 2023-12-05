'use client'

import React from 'react'
import { Button, useDisclosure, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import * as S from './styles'

type NavItem = { name: string; route: string }

interface INavItemProps {
  isHover?: boolean
  button: string
  items: NavItem[]
}
function NavItem({ isHover = false, button, items }: INavItemProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <S.MenuWrap>
      {isHover ? (
        <S.MenuDropdown isOpen={isOpen}>
          <S.MenuDropdownButton
            as={Button}
            variant='ghost'
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            onMouseOver={onOpen}
            onMouseOut={onClose}
          >
            {button}
          </S.MenuDropdownButton>
          <S.MenuDropdownMask>
            <S.MenuDropdownList onMouseEnter={onOpen} onMouseLeave={onClose} onMouseOver={onOpen} onMouseOut={onClose}>
              {menuList(items)}
            </S.MenuDropdownList>
          </S.MenuDropdownMask>
        </S.MenuDropdown>
      ) : (
        <S.MenuDropdown isOpen={isOpen}>
          <S.MenuDropdownButton as={Button} variant='ghost'>
            {button}
          </S.MenuDropdownButton>
          <S.MenuDropdownMask>
            <S.MenuDropdownList>{menuList(items)}</S.MenuDropdownList>
          </S.MenuDropdownMask>
        </S.MenuDropdown>
      )}
    </S.MenuWrap>
  )
}

export default NavItem

const menuList = (items: NavItem[]) => {
  return (
    <React.Fragment>
      {items.map((item, index) => (
        <S.MenuDropDownItem key={index}>
          <Link as={NextLink} href={item.route}>
            {item.name}
          </Link>
        </S.MenuDropDownItem>
      ))}
    </React.Fragment>
  )
}

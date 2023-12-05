import { IconButton } from '@chakra-ui/react'
import React from 'react'

interface IArrowButtonProps {
  situation: 'left' | 'right'
  icon: React.ReactElement
  className?: string
}

function ArrowButton({ situation, icon, className }: IArrowButtonProps) {
  return <IconButton variant='arrowIconButton' className={className} icon={icon} aria-label={`Arrow ${situation}`} />
}

export default ArrowButton

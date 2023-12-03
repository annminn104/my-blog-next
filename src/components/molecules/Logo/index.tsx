'use client'

import React from 'react'
import Image from 'next/image'

interface ILogoProps {
  size?: number
}

function Logo({ size = 40 }: ILogoProps) {
  return <Image src='./images/logo.svg' width={size} height={size} alt='logo' />
}

export default React.memo(Logo)

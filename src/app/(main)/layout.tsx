import Header from '@/components/organisms/Header'
import { Box, Container } from '@chakra-ui/react'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'My Blog Next',
  description: 'My Blog Next'
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container as='div' maxW='full'>
      <Header />
      <Box as='main'>{children}</Box>
    </Container>
  )
}

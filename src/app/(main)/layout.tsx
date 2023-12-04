import type { Metadata } from 'next'
import React from 'react'
import MainClientComponent from './client'

export const metadata: Metadata = {
  title: 'My Blog Next',
  description: 'My Blog Next'
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <MainClientComponent>{children}</MainClientComponent>
}

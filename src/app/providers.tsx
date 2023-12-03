'use client'

import customTheme from '@/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, cookieStorageManager } from '@chakra-ui/react'
import React from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <ColorModeScript initialColorMode={customTheme.config?.initialColorMode} type='cookie' />
      <CacheProvider>
        <ChakraProvider resetCSS colorModeManager={cookieStorageManager} theme={customTheme}>
          {children}
        </ChakraProvider>
      </CacheProvider>
    </React.Fragment>
  )
}

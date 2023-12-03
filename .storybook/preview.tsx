import { ChakraProvider } from '@chakra-ui/react'
import type { Preview } from '@storybook/react'
import React from 'react'
import customTheme from '../src/theme'

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={customTheme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]

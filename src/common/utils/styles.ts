import { css, Theme, StyleObjectOrFn } from '@chakra-ui/react'
import { AlignItems, Display, FlexDirection, FontWeight, JustifyContent } from '../interfaces'

export class StyleUtils {
  static sx = (styles: StyleObjectOrFn) => (props: { theme: Theme }) => css(styles)(props.theme)

  static adjustFlex = (
    display: Display = 'flex',
    flexDirection: FlexDirection = 'row',
    justifyContent: JustifyContent = 'center',
    alignItems: AlignItems = 'center'
  ) => {
    return { display, flexDirection, justifyContent, alignItems }
  }

  static fontBase = (fontSize: number | string, lineHeight: number | string, fontWeight: FontWeight) => {
    return { fontSize, lineHeight, fontWeight }
  }
}

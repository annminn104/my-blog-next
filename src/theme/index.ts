import { extendTheme } from '@chakra-ui/react'
import { foundations } from './foundations'
import { config } from './config'
import { components } from './components'

const customTheme = extendTheme({
  ...foundations,
  components,
  config
})

export default customTheme

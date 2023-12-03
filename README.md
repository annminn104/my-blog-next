# My Blog Next

### Example UI

```shell
- https://most-react.vercel.app
```

### Custom Chakra UI

```ts
import { BaseThemeTypings } from '@chakra-ui/styled-system'

type DefaultSizes = 'small' | 'medium' | 'large'

declare module '@chakra-ui/styled-system' {
  export interface CustomThemeTypings extends BaseThemeTypings {
    borders: 'none' | 'thin' | 'thick'
    components: {
      Button: {
        // Example custom component sizes and variants
        sizes: DefaultSizes
        variants: 'solid' | 'outline' | 'wacky' | 'chill'
      }
      // ...
    }
  }
}
```

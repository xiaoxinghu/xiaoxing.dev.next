import base from '@theme-ui/preset-system'
import { merge } from 'theme-ui'

const theme = merge(base, {
  // add custom config here
  config: {
    useLocalStorage: true,
    // initialColorModeName: 'deep',
    printColorModeName: 'initial',
  },
  buttons: {
    icon: {
      bg: 'muted',
      ':hover': {
        bg: 'highlight',
        cursor: 'pointer',
      }
    }
  }
})

export default theme

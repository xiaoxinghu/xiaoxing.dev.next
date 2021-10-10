/** @jsxImportSource theme-ui */
import { Global } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'
import { FaDownload, FaPalette } from 'react-icons/fa'
import { Box, Container, IconButton, Link as ThemedLink, Text, ThemeProvider, useColorMode } from 'theme-ui'
import styles, { theme } from './resume.styles'
import Toolbar from './resume.toolbar'
import VCard from './resume.vcard'

interface Props {
  title: string
}

const modes = ['system', 'dark', 'deep', 'swiss']

const Layout: FC<Props> = ({ children, title, ...rest }) => {
  const [colorMode, setColorMode] = useColorMode()
  const toggleColor = () => {
    const i = Math.max(modes.indexOf(colorMode), 0)
    const n = i + 1
    const next = modes[n] || modes[0]
    console.log({ colorMode, next })
    setColorMode(next)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box as='header' sx={{
        '@media print': { display: 'none' }
      }}>
        <Toolbar>
          <Link href='/cv.pdf'>
            <IconButton><FaDownload /></IconButton>
          </Link>
          <IconButton onClick={toggleColor}><FaPalette /></IconButton>
        </Toolbar>
      </Box>
      <Container sx={{ maxWidth: 800, mx: 'auto', p: '1em' }}>
        <Global styles={styles} />
        <VCard title={title} {...rest} />
        <Box as='main'>{children}</Box>
      </Container>
      <Box as='footer' sx={{
        display: 'flex',
        justifyContent: 'space-between',
        bg: 'muted',
        p: '2em',
        '@media print': { display: 'none' }
      }}>
        <Text>&copy; {title}</Text>
        <ThemedLink href='https://github.com/xiaoxinghu/xiaoxing.dev'>
          View Source
        </ThemedLink>
      </Box>
    </ThemeProvider>
  )
}

export default Layout

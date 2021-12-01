/** @jsxImportSource theme-ui */
import { Global } from '@emotion/react'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaDownload, FaPalette } from 'react-icons/fa'
import { Box, Container, IconButton, Link as ThemedLink, Text, ThemeProvider, useColorMode } from 'theme-ui'
import styles, { theme } from './resume.styles'
import Toolbar from './resume.toolbar'
import VCard from './resume.vcard'

interface Props {
  title: string
  author: string
  description: string
  children: ReactNode
}

const modes = ['system', 'dark', 'deep', 'swiss']

const Layout = ({
  title,
  author,
  description,
  children,
  ...rest
}: Props) => {
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
        <NextSeo
          title={title}
          description={description}
          openGraph={{
            title,
            description,
            url: 'https://xiaoxing.dev',
            type: 'website',
            images: [
              {
                url: 'https://xiaoxing.dev/og.jpg',
                width: 1200,
                height: 627,
                alt: 'Profile Photo',
              }
            ]
          }}
        />
        <Toolbar>
          <Link href='/cv.pdf'>
            <IconButton><FaDownload /></IconButton>
          </Link>
          <IconButton onClick={toggleColor}><FaPalette /></IconButton>
        </Toolbar>
      </Box>
      <Container sx={{ maxWidth: 800, mx: 'auto', p: '1em' }}>
        <Global styles={styles} />
        <VCard name={author} {...rest} />
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

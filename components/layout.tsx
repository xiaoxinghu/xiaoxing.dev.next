/** @jsxImportSource theme-ui */
import { Themed, Box, Button, useColorMode } from 'theme-ui'
import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

type Props = {
  title: string
  description: string
  children: ReactNode
}

const Resume = ({ title, description, children }: Props) => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <>
      <NextSeo
        title={title} description={description}
      />
      <Box sx={{ maxWidth: 700, mx: 'auto' }}>
        <header
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Themed.h1>{title || 'Next + Orga'}</Themed.h1>
          <Button
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
          >
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </header>
        <hr />
        {children}
      </Box>

    </>
  )
}

export default Resume

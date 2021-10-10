/** @jsxImportSource theme-ui */
import type { FC } from 'react'
import { Box, Flex } from 'theme-ui'

interface Props {
  start: string
  end: string
}

const Time: FC<Props> = ({ start, end }) => {
  return (
    <Flex sx={{color: 'gray', gap: '0.4em'}} className='vcard duration'>
      <Box as='time'>{start}</Box>
      -
      <Box as='time'>{end || 'present'}</Box>
    </Flex>
  )
}

export default Time

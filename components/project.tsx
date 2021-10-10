/** @jsxImportSource theme-ui */
import type { FC } from 'react'
import { Card, Heading } from 'theme-ui'

interface Props {
  name: string
  link: string
}

const Project: FC<Props> = ({ name, link, children }) => {
  return (
    <Card>
      <Heading>{name}</Heading>
      {children}
    </Card>
  )
}

export default Project

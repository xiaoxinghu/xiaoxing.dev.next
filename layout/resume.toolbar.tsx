import { FC } from "react"
import { Container } from "theme-ui"

const Toolbar: FC = ({ children }) => {
  return (
    <Container sx={{
      display: 'flex',
      maxWidth: 1024,
      padding: '0.4em',
      justifyContent: 'flex-end',
      gap: '0.4em',
    }}>
      {children}
    </Container>
  )
}

export default Toolbar

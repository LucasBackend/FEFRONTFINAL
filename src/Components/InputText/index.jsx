import { Container } from './style'

export function InputText({ title, type, ...rest }) {
  return (
    <Container>
      <input type={type} {...rest} placeholder={title} />
    </Container>
  )
}

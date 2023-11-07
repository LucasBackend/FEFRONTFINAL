import { Container } from './style'

export function ButtonText({ title, children, ...rest }) {
  return <Container {...rest}>{children}</Container>
}

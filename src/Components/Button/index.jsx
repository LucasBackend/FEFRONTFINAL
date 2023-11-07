import { Container } from './style'

export function Button({ isDelete, title, children, icon: Icon, ...rest }) {
  return (
    <Container isDelete={isDelete} {...rest}>
      {Icon && <Icon size={32} color="#FFFFFF" />}
      {children}
    </Container>
  )
}

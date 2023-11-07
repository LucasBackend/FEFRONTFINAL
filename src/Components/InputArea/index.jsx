import { Container } from './style'
export function InputArea({ placeHolder, value, ...rest }) {
  return (
    <Container>
      <textarea
        name=""
        cols="30"
        rows="10"
        placeholder={placeHolder}
        value={value}
        {...rest}
      ></textarea>
    </Container>
  )
}

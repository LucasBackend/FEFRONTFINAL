import { Container } from './style'
export function Selectinput({ children, selections, ...rest }) {
  return (
    <Container {...rest}>
      {selections.map((selects) => (
        <option className="option" value={selects.Value} key={selects.id} >
          {selects.Value}
        </option>
      ))}
    </Container>
  )
}

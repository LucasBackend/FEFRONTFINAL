import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
  display: flex;
  border-radius: 8px;

  > input {
    width: 100%;
    background: transparent;
    border: none;
    padding: 10px;
    color: white;
    border-radius: 8px;
    font-size:1rem;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.BLUE_CAKE_200};
    }
  }
`

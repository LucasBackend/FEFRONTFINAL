import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 172px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
  border-radius: 8px;

  > textarea {
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-family: Roboto, sans-serif;
    resize: none;
    background: transparent;
    border: none;
    border-radius: 8px;
    padding: 10px;
    color: white;

    &:focus {
      outline: 1px solid ${({ theme }) => theme.COLORS.BLUE_CAKE_200};
    }
  }
`

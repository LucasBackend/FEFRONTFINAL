import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 48px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
  display: flex;
  border-radius: 8px;

  > label {
    width: 100%;
    height: 100%;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    > svg {
      fill: white;
    }

    > p {
      color: white;
      font-family: Poppins, sans-serif;
      font-size: 0.875rem;
    }

    > #inputImg {
      display: none;
    }
  }
`

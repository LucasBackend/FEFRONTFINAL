import styled from 'styled-components'
import { BREAKING_POINT } from '../../style/deviceBreakingPoint'

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  top: 0;
  transform: translateX(-100%);

  > .Container {
    width: 85%;
    margin: 36px auto 0;

    > button ,a button{
      margin-top: 36px;
      font-family: Poppins, sans-serif;

      font-size: 22px;
      font-weight: 300;
      border: none;
      background: none;
      color: ${({ theme }) => theme.COLORS.FONT_GREY};
    }
  }

  #line {
    height: 1px;
    background: #192227;
    margin-top: 10px;
  }

  @media (max-width: ${BREAKING_POINT.MD}) {
    display: flex;

    transition: transform 0.3s ease-in-out;

    &&[data-sub-open='true'] {
      transform: translateX(0);
    }
  }
`

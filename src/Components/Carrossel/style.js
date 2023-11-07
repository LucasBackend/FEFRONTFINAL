import styled from 'styled-components'
import { BREAKING_POINT } from '../../style/deviceBreakingPoint'

export const Container = styled.div`
  width: 100%;
  height: 529px;
  background: transparent;
  border-radius: 8px;
  padding-inline: 50px;
  @media (max-width: ${BREAKING_POINT.MD}) {
    height: 375px;
  }

  > section {
    gap: 10px;
    padding-left: 60px;
    padding-right: 60px;
    display: grid;

    > .splide__track .splide__list {
      gap: 16px;
    }

    > .splide__arrows .splide__arrow {
      top: 54%;
    }

    > #carousel-heading {
      color: white;
    }

    > div button svg {
      color: white;
    }
  }

  #carousel-heading {
    color: white;
    margin-top: 62px;
  }
`

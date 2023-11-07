import styled from 'styled-components'
import { BREAKING_POINT } from '../../style/deviceBreakingPoint'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 104px auto 77px;
  grid-template-areas:
    'Navbar'
    'Content'
    'Footer';

  > main {
    grid-area: Content;
    width: 100%;
    position: relative;
    overflow-y: auto;
  }
`

export const Containerform = styled.div`
  width: 90%;
  height: 95%;
  margin: 40px auto 0;

  @media (max-width: ${BREAKING_POINT.MD}) {
    &&[data-sub-menu-open='true'] {
      display: none;
    }
  }

  > h1 {
    color: white;
    font-family: Poppins;
    font-size: 2rem;
    font-weight: 500;
  }

  > .back {
    margin-bottom: 24px;

    > a button {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      > p {
        color: white;
        font-size: 1.5rem;
        font-family: Poppins, sans-serif;
        font-weight: 700;
      }

      > svg {
        fill: white;
      }
    }
  }

  > #lineOne {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 32px;
    margin-top: 32px;

    > :nth-child(1) {
      width: 350px;
    }

    > :nth-child(2) {
      width: 100%;
    }

    > :nth-child(3) {
      width: 364px;
    }

    > .Card {
      > p {
        color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
        font-size: 1rem;
        font-family: Roboto, sans-serif;
        margin-bottom: 16px;
      }
    }

    @media (max-width: ${BREAKING_POINT.MD}) {
      flex-direction: column;

      > .Card {
        width: 100%;
      }
    }
  }

  > #lineTwo {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 32px;
    margin-top: 32px;

    > :nth-child(1) {
      width: 100%;
    }

    > :nth-child(2) {
      width: 215px;
    }

    > .Card {
      > p {
        color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
        font-size: 1rem;
        font-family: Roboto, sans-serif;
        margin-bottom: 16px;
      }

      > div #value::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }

      > #Ingredients {
        background: ${({ theme }) => theme.COLORS.BACKGROUND_INPUTS};
        width: 100%;
        min-height: 48px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 10px;
        gap: 10px;
      }
    }

    @media (max-width: ${BREAKING_POINT.MD}) {
      flex-direction: column;

      > .Card {
        width: 100%;

        > #Ingredients {
          gap: 20px;
        }
      }
    }

    @media (max-width: ${BREAKING_POINT.LD}) {
      > .Card #Ingredients {
        justify-content: center;
      }
    }
  }

  > #lineThree {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 32px;
    margin-top: 32px;

    > :nth-child(1) {
      width: 100%;
    }

    > .Card {
      > p {
        color: ${({ theme }) => theme.COLORS.LABEL_COLOR};
        font-size: 1rem;
        font-family: Roboto, sans-serif;
        margin-bottom: 16px;
      }
    }
  }

  > #buttons {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;

    > button {
      width: 10.75rem;
      background: #ab4d55;
      margin-top: 32px;
      font-size: 0.875rem;
    }
  }
`

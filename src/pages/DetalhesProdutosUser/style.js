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
    
  }
`

export const ContainerDetails = styled.div`
  width: 90%;
  height: 100%;
  margin: 0px auto 0;

  @media (max-width: ${BREAKING_POINT.MD}) {
    &&[data-sub-menu-open='true'] {
      display: none;
    }
  }

  > .back {
    margin-bottom: 42px;
    margin-top:40px;

    > button {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }

    > button p,
    button svg {
      color: white;
      fill: white;
      font-size: 1.5rem;
      font-family: Poppins, sans-serif;
      font-weight: 700;
    }

    @media (max-width: ${BREAKING_POINT.MD}) {
      margin-bottom: 20px;
    }
  }
`

export const Details = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 48px;

  @media (max-width: ${BREAKING_POINT.MD}) {
    flex-direction: column;
    align-items: center;
    gap: 25px;
  }

  > img {
    @media (max-width: ${BREAKING_POINT.MD}) {
      width: 250px;
      height: 250px;
    }
  }

  > .info {
    width: 50%;
    padding-bottom: 10px;

    @media (max-width: ${BREAKING_POINT.MD}) {
      width: 60%;
    }

    > .marcadores {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;

      @media (max-width: ${BREAKING_POINT.MD}) {
        justify-content: center;
      }
    }

    > .containerAdd {
      margin-top: 48px;
      display: flex;
      gap: 20px;
      align-items: center;

      @media (max-width: ${BREAKING_POINT.MD}) {
        flex-direction: column;
        gap: 5px;
        margin-top: 30px;
      }
    }
    > .containerAdd button {
      width: 180px;
      height: 48px;

      @media (max-width: ${BREAKING_POINT.MD}) {
        width: 100%;
        margin-top: 25px;
      }
    }

    > .containerAdd .add {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;

      > button {
        width: 30px;
        height: 30px;
        font-size: 2.5rem;
        background: transparent;

        @media (max-width: ${BREAKING_POINT.MD}) {
          margin: 0px;
        }
      }

      > p {
        color: white;
        font-size: 1.5rem;
      }
    }
  }

  > .info h1 {
    color: white;
    font-family: Poppins, sans-serif;
    margin-bottom: 24px;
    font-size: 2.5rem;
    font-weight: 500;

    @media (max-width: ${BREAKING_POINT.MD}) {
      text-align: center;
      margin-bottom: 20px;
    }
  }

  > .info h2 {
    color: white;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 24px;
    text-align: left;

    @media (max-width: ${BREAKING_POINT.MD}) {
      text-align: center;
    }
  }
`

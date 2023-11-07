import styled from 'styled-components'
import { BREAKING_POINT } from '../../style/deviceBreakingPoint'

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 104px auto 77px;
  grid-template-areas:
    'Navbar'
    'Content'
    'Footer';

  > main {
    position: relative;
    grid-area: Content;
    width: 100%;
    overflow-y: auto;
    margin-bottom: 15px;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.BLUE_CAKE_200};
      border-radius: 5px;
    }

    > .Container {
      &[data-menu-isopen='true'] {
        display: none;
      }
    }

    > .Container .banner {
      width: 90%;
      height: 260px;
      padding: 10px;
      margin: 164px auto 0;
      display: flex;
      align-items: center;
      border-radius: 8px;
      gap: 15rem;
      background: var(
        --gradients-200,
        linear-gradient(180deg, #091e26 0%, #00131c 100%)
      );
      @media (max-width: ${BREAKING_POINT.MD}) {
        margin-top: 44px;
        @media (max-width: ${BREAKING_POINT.ML}) {
          position: relative;
          height: 120px;
          gap: 80px;
        }
      }

      > #foto {
        position: relative;
        width: 40%;
        height: 100%;
        > img {
          position: absolute;
          top: -62%;
          left: -16%;
          @media (max-width: ${BREAKING_POINT.UW}) {
            left: -9%;
          }
          @media (max-width: ${BREAKING_POINT.LPL}) {
            left: -16%;
          }
          @media (max-width: ${BREAKING_POINT.TBT}) {
            left: -27%;
          }
          @media (max-width: ${BREAKING_POINT.LPT}) {
            left: -25%;
          }
          @media (max-width: ${BREAKING_POINT.MD}) {
            width: 420px;
            height: 320px;
            top: -25%;
            left: -23%;
          }
          @media (max-width: ${BREAKING_POINT.ML}) {
            width: 191px;
            height: 129px;
            left: -30px;
            top: -15px;
          }
        }
      }
    }
  }
  .info {
    p {
      display: flex;
      color: white;
      font-size: 2.83rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      @media (max-width: ${BREAKING_POINT.LD}) {
        font-size: 23px;
      }
      @media (max-width: ${BREAKING_POINT.ML}) {
        font-size: 18px;
        left: 20px;
      }
    }

    h2 {
      font-family: Roboto;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      color: var(--light-light-300, #e1e1e6);
      @media (max-width: ${BREAKING_POINT.LD}) {
        font-size: 11px;
        @media (max-width: ${BREAKING_POINT.ML}) {
          font-size: 18px;
        }
      }
    }

    @media (max-width: ${BREAKING_POINT.ML}) {
      top: -20%;
    }
  }
`

export const SubMenu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  top: 0;
  transform: translateX(-100%);

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

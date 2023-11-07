import styled from 'styled-components'

import { BREAKING_POINT } from '../../style/deviceBreakingPoint'

export const Container = styled.nav`
  width: 100%;
  height: 104px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CLEAN};
  grid-area: Navbar;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .navWeb {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 32px;

    > button {
      max-width: 170px;
    }

    > svg {
      min-width: 32px;
      color: white;

      :hover {
        cursor: pointer;
      }
    }

    > .ContainerLogo {
      display: flex;
      min-width: 197px;
      align-items: center;
      justify-content: center;
      gap: 10px;

      img {
        width: 30px;
        height: 30px;
      }

      > h2 {
        color: white;
      }
    }

    .navMobile {
      display: none;
    }

    @media (max-width: ${BREAKING_POINT.MD}) {
      display: none;
    }
  }
`

export const NavClose = styled.div`
  display: none;

  > svg {
    color: white;
    :hover {
      cursor: pointer;
    }
  }

  > .ContainerLogo {
    display: flex;
    min-width: 197px;
    align-items: center;
    justify-content: center;
    gap: 10px;

    img {
      width: 30px;
      height: 30px;
    }

    > h2 {
      color: white;
      font-size: 21px;
    }
  }

  > button {
    background: transparent;
    width: 40px;
    height: 40px;
    position: relative;

    > p {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      color: red;
      top: 0;
      right: -0px;
      font-size: 14px;
      background-color: ${({ theme }) => theme.COLORS.RED_TOMATO};
      color: white;
      border-radius: 99px;
      width: 20px;
      height: 20px;
    }
  }

  @media (max-width: ${BREAKING_POINT.MD}) {
    &&[data-menu-isclone='true'] {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 95%;
    }
  }
`

export const NavOpen = styled.div`
  display: none;
  > svg {
    color: white;
  }

  @media (max-width: ${BREAKING_POINT.MD}) {
    width: 95%;

    > p {
      color: white;
      font-size: 21px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }

    &&[data-menu-isopen='true'] {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
`

import styled from 'styled-components'

import { BREAKING_POINT } from '../../style/deviceBreakingPoint'

export const Container = styled.li`
  width: 19rem;
  height: 400px;
  border-radius: 8px;
  background-color: #00070a;
  position: relative;
 
  > svg {
    position: absolute;
    right: 16px;
    top: 16px;
    fill: white;
    cursor: pointer;
    z-index:2
  }

  > img {
    width: 176px;
    height: 176px;
    margin: 24px 21% 0;
    @media (max-width: ${BREAKING_POINT.MD}) {
      width: 88px;
      height: 88px;
      margin-left: 63px;
    }
    @media (max-width: ${BREAKING_POINT.TBT}) {
      left: -120%;
    }
  }

  @media (max-width: ${BREAKING_POINT.MD}) {
    width: 210px;
    height: 292px;
  }

  > h2 {
    color: white;
    bottom: 0;
    text-align: center;
    font-family: Poppins;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 33.6px */
    margin-top: 15px;
    @media (max-width: ${BREAKING_POINT.MD}) {
      font-size: 14px;
    }
  }

  > p {
    color: #c4c4cc;
    height:45px;
    overflow-y:auto;
    text-align: center;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 22.4px */
    margin-top: 15px;
    @media (max-width: ${BREAKING_POINT.MD}) {
      display: none;
    }
  }

  > h3 {
    color: #82f3ff;
    font-family: Roboto;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 51.2px */
    margin-top: 15px;
    text-align: center;
    @media (max-width: ${BREAKING_POINT.MD}) {
      font-size: 16px;
      margin-top: 12px;
    }
  }
`

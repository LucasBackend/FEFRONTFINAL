import { createGlobalStyle } from 'styled-components'
import { BREAKING_POINT } from './deviceBreakingPoint'

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style-type: none;
}

:root{
  font-size:16px;

  @media (max-width:${BREAKING_POINT.MD}){
    font-size:12px
  }


}

body {
font-size: 16px;
font-family:"Roboto Slab",sans-serif;
background-color:${({ theme }) => theme.COLORS.BACKGROUND};
  
}

button,a,img {
  cursor: pointer;
  text-decoration:none;
}

`

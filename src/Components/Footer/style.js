import styled from "styled-components";

export const Container = styled.footer`
width:100%;
height:77px;
background-color:${({theme})=>theme.COLORS.BACKGROUND_CLEAN};
grid-area:Footer;

display:flex;
align-items:center;
justify-content:space-between;
padding:30px;

.Logo{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;

  >img{
    width:30px;
    height:30px;
  }

  >h2{
    color:#4D585E;
    font-size:1.3rem;
    font-family:Roboto,sans-serif;

  }
}

>p{
  color:#FFFAF1;
  font-size:0.7rem;
}

`
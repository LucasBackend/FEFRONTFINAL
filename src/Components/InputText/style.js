import styled from 'styled-components'


export const Container = styled.div`
width:100%;
height: 60px;
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_CLEAN};
border-radius:10px;
outline:none;
display:flex;
align-items:center;
justify-content:start;
margin-top: 8px;
margin-bottom: 32px;

:hover{
    outline: 1px solid ${({ theme }) => theme.COLORS.BLUE_CAKE_200};
  }

::placeholder {
  color: ${({ theme }) => theme.COLORS.FONT_PLACEHOLDER}; 
  opacity: 0.7;
}

>svg{
  margin-left:0.625rem;
}

>input {
  width:100%;
  height:100%;
  background-color: #0D1D25;
  border:none;
  border-radius: 8px;
  outline: none;
  padding:1rem;
  font-size:1rem;
  color: white;
  font-family:'Roboto',sans-serif;
}


`

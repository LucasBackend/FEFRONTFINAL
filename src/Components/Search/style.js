import styled from 'styled-components'


export const Container = styled.div`
width:100%;
height: 45px;
background-color: #0D1D25;
border-radius:5px;
outline:none;
gap: 10px;
display:flex;
align-items:center;
justify-content:center;



::placeholder {
  color: ${({ theme }) => theme.COLORS.FONT_PLACEHOLDER}; 
  opacity: 0.7;
}

>svg{
  margin-left:10px;
}

>input {
  width: 100%;
  height: 45px; 
  background-color: transparent;
  border:none;
  border-radius: 8px;
  outline: none;
  font-size:16px;
  color: white;
  font-family:'Roboto',sans-serif;
}


`

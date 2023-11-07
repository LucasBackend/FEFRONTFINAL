import styled from 'styled-components'

export const Container = styled.select`
width:100%;
height:48px;
background:${({theme})=>theme.COLORS.BACKGROUND_INPUTS};
border:none;
border-radius:8px;
padding:10px;
color:white;
font-size:1rem;

&:focus{
        outline:1px solid ${({theme})=>theme.COLORS.BLUE_CAKE_200};
        
    }


`
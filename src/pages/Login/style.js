import styled from 'styled-components'
import polygon from '../../assets/polygon.svg'

export const Container = styled.div`


.Content {
    margin-left: clamp(16px, 20px, 110px);
    margin-right: clamp(16px, 20px, 110px);
}

.Content main {
    display: flex;
    place-content: center;
    justify-content: space-evenly;
    align-items: center;
    color: white;
    height: 100vh;
    gap: 1rem;
    flex-direction: row;
    
    .Form {
        background-color: #001119;
        width: 47.6rem;
        border-radius: 1rem;
        padding: 6.4rem;
    }

    .Registro label {
        color: ${({theme})=>theme.COLORS.FONT_GREY};

        
    } 

    h3 {
        color: white;
        font-size: 32px;
        font-family: Poppins;
        font-weight: 500;
        line-height: 44.80px;
        word-wrap: break-word;
        text-align: center;
        margin-bottom: 32px;
    }
    .Registro{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        >button{
            font-size:1rem;
        }
    }
    
    h4 {
        text-align: center;
        color:white;
        font-family: Poppins;
        font-weight: 500;
        line-height: 24px;
        font-size: 0.875rem;
        margin-top: 3.2rem;

        &:hover {
            cursor: pointer;
            color: ${({ theme }) => theme.COLORS.FONT_PLACEHOLDER};
        }
    }

}   



.Content main .Container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32rem; 
    margin-top: -8rem;
    gap: 2rem;
        h2 {
            color: white;
            font-size: 3rem;
            font-family: Roboto;
            font-weight: 700;
        }
}

@media (max-width: 695px) {
        .Content main {
            flex-direction: column;
            justify-content: center;
            gap: 5.3rem;

            .Form {
                width: 100%;
                padding: 2rem;
                background-color: ${({theme})=>theme.COLORS.BACKGROUND};
            }

            h3 {
                display: none;
            }


        }

        .Content main .Container {
            gap: 1.1rem;
            width: 90%;
            
            h2 {
                color: ${({ theme }) => theme.COLORS.FONT_WHITE};
                font-family: Roboto;
                font-size: 35px;
                font-style: normal;
                font-weight: 700;
            }
        }
    }

`

export const Logo = styled.img`
color: #065E7C;

`

export const Form = styled.div`
background-color: #001119;

`
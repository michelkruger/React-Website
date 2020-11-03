
import Styled from 'styled-components'

export const Container = Styled.div `
    width:50%;
    color:white;
`
export const SpaceBetween = Styled.div `
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const Button = Styled.button `
    width:10rem;
    height:35px;
    background-color:#66d02a;
    color:white;
    font-weight:800;
    border:none;
    border-radius:6px;
    cursor:pointer;

    &&:hover{
        background-color:#4ca719;
        transition: 0.4s;
    }
`

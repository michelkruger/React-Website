import React from 'react'
import Styled from 'styled-components'
import {Container,SpaceBetween} from '../common/common'

export default () => {
    return(
        <Nav>
            <Container>
            <SpaceBetween>
                <div>
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Features</a></li>
                    </ul>
                </div>

                <div>
                    <h1>Devi<span>On</span></h1>
                    <Triangle></Triangle>
                </div>

                <div>
                    <ul>
                        <li><a>How work</a></li>
                        <li><a>Info</a></li>
                    </ul>
                </div>
            </SpaceBetween>
            </Container>
        </Nav>
    )
}


export const Nav = Styled.nav `

    width: 100%;
    height: 40px;
    background-color: #3c3c3c;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;

    div ul li{
        display:inline;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
    }

    li:hover{
        color:#66d02a;
        cursor: pointer;
    }

    span {
        color:#66d02a;
    }

    h1 {
        text-align: center;
        margin-top:40px;
    }
`

export const Triangle = Styled.div `
    width: 0; 
    height: 0; 
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    border-top: 40px solid #3c3c3c;

`
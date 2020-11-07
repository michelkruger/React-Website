import React from 'react'
import Styled from 'styled-components'
import {Container,SpaceBetween} from '../common/Common'

export default () => {
    return(
        <Nav>
            <Container>
            <SpaceBetween>
                <div className="navHidden"> 
                    <div>
                        <ul>
                            <li><a>About</a></li>
                            <li><a>Features</a></li>
                            <li><a>How work</a></li>
                            <li><a>Info</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navContent">
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Features</a></li>
                    </ul>
                </div>

                <div>
                    <h1>Devi<span>On</span></h1>
                    <Triangle></Triangle>
                </div>

                <div className="navContent">
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
    font-size: 1.1rem;

    div ul li{
        display:inline;
        margin-left: 0.8rem;
        margin-right: 0.8rem;
        transition:all 1s;
    }

    li:hover{
        color:#66d02a;
        cursor: pointer;
        border-bottom: 1px solid #66d02a; 
    }

    span {
        color:#66d02a;
    }

    h1 {
        text-align: center;
        margin-top:40px;
    }

    .navHidden {
        display:none;
        width: 50px;
        height:50px;
        background-color:red;
    }

    @media(max-width: 900px){
        .navContent {
            display:none; 
        }

        .navHidden {
            display:block;
        }
    }

    .navHidden div {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
    }

`

const SpaceBetweenMedia = Styled(SpaceBetween) `
    @media(max-width:900px) {
        justify-content: center;
    }
`


const Triangle = Styled.div `
    width: 0; 
    height: 0; 
    border-left: 45px solid transparent;
    border-right: 45px solid transparent;
    border-top: 45px solid #3c3c3c;

`

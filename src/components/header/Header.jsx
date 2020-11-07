import React from 'react'
import Styled from 'styled-components'

import Navbar from '../navbar/Navbar'
import {Button} from '../common/Common'
import Astro from '../../assets/saturno.svg'

export default () => {
    return(
        <Header>
            <Navbar/>
            <Grid>
                <Item1>
                    <div>
                        <h1>Welcome to Devi<span>On</span>.</h1>
                        <h3>The next level of WebSite production.</h3>  
                    </div>
                    <div>
                        <Button>See More</Button>
                    </div>
                </Item1>
                <Item2>
                    <Img src={Astro}></Img>
                </Item2>
            </Grid>
        </Header>
    )
}

const Header = Styled.header `
    width: 100%;
    height: 100vh;
    background-color: #333;
`

const Grid = Styled.div `
    width:100%;
    height:80vh;
    display:grid;
    grid-template-columns: 1fr 1fr;
`

const Item1 = Styled.div `
    width:100%; 
    height:100%;
    font-size: 1.3rem;
    color: white;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    text-align: left;

    span {
        color:#66d02a;
    }

    div {
        margin-top:15px;
        width: 70%;
    }
`
const Item2 = Styled.div `
    width:100%; 
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

`

const Img = Styled.img `
    width: 50%;
    height: auto;
    margin-left:20%;
`
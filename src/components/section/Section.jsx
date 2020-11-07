import React from 'react'
import Styled from 'styled-components'

import {ContainerContent} from '../common/Common'
export default () => {
    return(
        <Section>
            <ContainerContent>
            <h1>About Us</h1> 
            </ContainerContent>
        </Section>  
    )
}

const Section = Styled.section `
    
    display: flex;
    justify-content:center;
    width: 100%;
    height: 100vh;
    background:#3c3c3c;


`


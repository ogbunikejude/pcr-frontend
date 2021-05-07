import React from 'react'
import styled from 'styled-components'

function sideCard({className, children}) {
    return (
        <Wrapper className={className} >
            {children}        
        </Wrapper>
    )
}

export default sideCard

const Wrapper = styled.div`
background-color: #51acd3;
`
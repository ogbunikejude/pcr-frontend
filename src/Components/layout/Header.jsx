import React from 'react'
import styled from 'styled-components'
import Button from '../common/button'
import { ReactComponent as SearchIcon } from '../common/Assets/icons/SearchIcon.svg'

function Header() {
    return (
        <>
        <Row>
            <div>
            <Btn >My Patients</Btn>
            <SearchBar>
                <Input placeholder="Search Patient"/>
                <RightIcon ><SearchIcon style={{ width: '3rem' }} /></RightIcon>
            </SearchBar>
            </div>
            <Buttongrp>
            <Button margin-right="8rem">Book Appointment</Button>
            <Button >Send Message</Button>
            </Buttongrp>
            
        </Row>
        </>
    )
}

export default Header

const Row= styled.div`
width: 100%;
max-width: 100%;
height: 100px;
display: flex;
background-color: #fdfdfd;
justify-content: space-between;
border: 1px solid #ccc;
border-radius: 10px;


div{
    width:100%;
    /* height:100px; */
    display: flex;
    margin: 0 1rem;
    padding: 2rem 0;
    justify-content: space-between;

}
`
const SearchBar = styled.div `
width: 100%;
/* padding: 2rem; */
display: flex;
border: 1px solid #ccc;
background-color: #ffff;
border-radius:10px;
`
const Input = styled.input.attrs(props => ({
    type: "text" ,
}))`
padding: 0.25em 1rem;
width:100%;
margin: auto 0;
color: #b0b0b0;
background-color: #ffff;
border: none;
border-radius: 3px;
`
const Btn = styled(Button)`
background-color: #fdfdfd;
color: #b0b0b0;
font-weight: 700;
font-size: 1.8 rem;
border:1px solid #ccc;
padding:1rem 3rem;
white-space: nowrap;

`
const Buttongrp= styled.div`
width: 100%;
/* margin-right: 1rem; */
justify-content: space-evenly;
`
const RightIcon = styled(Button)`
background-color: #fdfdfd;
border: none;
`

import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Container>
   <span> <Link> BoJo Technology Ltd.</Link> © copyright 2024 BJ votes. All rights reserved. v2.009</span>
    </Container>
  ) 
}

export default Footer

const Container = styled.div`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
margin-top: auto;
padding: 20px 10px;
background: rgb(0 0 0);
span{
  color: gray;
}
`
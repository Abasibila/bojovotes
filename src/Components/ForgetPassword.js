import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function ForgetPassword() {
  return (
    <Container>
      <WrapForm>
        <h3>forget password?</h3>
        <p>Enter your email address and we'll send you instructions to update your password</p>
        <FormWrap>
          <input type='text' placeholder='Email' />
          <button>Send</button>
          <p>I remembered my Password!
                <Link to={"/login"}>
                    <span> Sign In</span>
                </Link>
          </p>
        </FormWrap>
        </WrapForm>
    </Container>
  )
}

export default ForgetPassword
const FormWrap = styled.form`
display: grid;
grid-template-rows: 30px 30px 30px 30px;
grid-gap: 30px;
input{
 border: whitesmoke solid 1px;
 background: transparent; 
 border-radius: 5px;
 padding: 7px;
 color: white;
 &:hover{
  border: white solid 2px;
 }
}
button{
  border: 4px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  background: whitesmoke; 
  border-radius: 5px;
  padding: 7px;
  color: black;
  &:hover{
    background: white; 
   border: black solid 1px;
  }
}
span{
color: gray;
 &:hover{
  color: brown;
 }
}
p{
  span{
    color: rgb(143, 129, 9);
    &:hover{
      color: rgb(255, 129, 50);
     }
  }
}
`

const Container = styled.div`
display: flex;
align-items: top;
justify-content: center;
positon: relative;
min-height: calc(100vh - 70px);
`
const WrapForm = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 75%;
padding: 10px 25px;
cursor: pointer;
border-radius: 10px;
border: 4px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover{
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`
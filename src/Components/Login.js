import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {

  // { !userName ? (
  //   <Login>Sign In</Login>) :
  return (
    <Container>
      <ContentBox>
      <WrapForm>
        <h3>Sign into your account</h3>
        <FormWrap>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <Link to={"/"}>
              <button>Sign In</button>
            </Link>
          <Link to={"/forgetpassword"}>
             <span>Forget Your Password?</span>
          </Link>
          <p>I don't have an account! <span><a href='mailto: bojo@gmail.com'>Countact Us</a></span></p>
        </FormWrap>
        </WrapForm>
      </ContentBox>
    </Container>
  )
}

export default Login
const FormWrap = styled.form`
display: grid;
grid-template-rows: 30px 30px 30px 30px 30px 30px;
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
  width: 100%;
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
    a{
      color: rgb(143, 129, 9);
    &:hover{
      color: rgb(255, 129, 50);
     }
    }
  }
}
`

const ContentBox = styled.div`
display: flex;
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
width: 100%;
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
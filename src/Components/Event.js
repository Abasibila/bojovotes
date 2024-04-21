import React from 'react'
import styled from "styled-components";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import Sections from './Sections';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Event() {
  return (
   <Container> 
    <Router>
        <WrapLogo>
          <div>
            <h3>Event Name</h3>
          </div>
          <div>
            <img src="/images/LOGO.png" />
          </div>
        </WrapLogo>
        <WrapForm>
            <Grid>
                <div>
                    <EditIcon />
                    <input type="button" value="Edit Event"/>
                 </div>
                <div>
                    <CastIcon />
                    <input type="button" value="Cast Out"/>
                 </div>
                <div>
                    <PaymentIcon/>
                    <input type="button" value="Payments"/>
                 </div>
                <div>
                    <TicketIcon />
                    <input type="button" value="Tickets"/>
                 </div>
            </Grid>
        </WrapForm>
      <switch>
      <Route>
        <Sections path="/event/sections" />
      </Route>
      </switch>
     </Router>
   </Container>
  )
}

export default Event
const TicketIcon = styled(ConfirmationNumberIcon)`color: black;`
const PaymentIcon = styled(AttachMoneyOutlinedIcon)`color: black;`
const CastIcon = styled(ShoppingCartOutlinedIcon)`color: black;`
const EditIcon = styled(EditOutlinedIcon)`
color: black;
`
const BtnSave = styled.div`
display: flex;
width: 100px;
margin-left: 70%;
input{
  background: blue;
  color: white;
  padding: 6px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  border: 4px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover{
    padding: 6px;
    border: 1px solid rgba(249, 249, 249, 0.8);
  }
  &:focus{
    padding: 10px;
    background-color: whitesmoke;
    color: black;
    border: 0.1px solid rgba(249, 249, 249, 0.1);
  }
}    

`

const Container = styled.div`
position: relative;
`

 
const Grid = styled.div`
display: grid;
padding: 10px 0;
grid-gap: 20px;
grid-template-columns: repeat(2, minmax(0, 1fr));
@media(min-width: 768px){
    grid-template-columns: repeat(5, minmax(0, 1fr));
}
div{
  overflow: hidden;
  display: flex;
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  background: whitesmoke;
  input{
    width: 100%;
    border: none;
    background: whitesmoke;
  }
      &:hover{
        padding: 10px;
      } 
      img{
        width: 15px;
        height: 15px;
      }   
}
`



const WrapLogo = styled.div`
margin: 20px auto;
width: 50%;
cursor: pointer;
overflow: hidden;
border-radius: 10px;
border: 4px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  div{
    h3{
      color: whitesmoke;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &:hover{
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`
const WrapForm = styled(WrapLogo)`
  width: 75%;
  padding: 10px 25px;
`
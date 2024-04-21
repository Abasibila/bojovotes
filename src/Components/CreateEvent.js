import React, { useState } from 'react'
import styled from "styled-components";
function CreateEvent() {
  const [toggle, setToggle] = useState(false);
  return (
   <Container>
    <Forms>
        <WrapLogo>
          <div>
            <h3>Create Event</h3>
          </div>
          <div>
            <img src="images/logo.png" />
          </div>
          <span>click image to select event logo</span>
        </WrapLogo>
        <WrapForm>
            <SectionHeader>
             <h3>Event Info</h3>
             <p>Who is organising the event.</p>
            </SectionHeader>
            <section>
              <section>
                <label>Event Name</label>
                <input type="text" placeholder="e.g: bojo music Events 2024"/>
              </section>
              <section>
                <label>Describe Your Event</label>
                <input type="text" placeholder="Give a detail description of your event"/>
              </section>
            </section>
            <Grid>
                    <div>
                      <label>Event Start Date</label>
                      <input type="date" placeholder="March 9, 2024" />
                    </div>
                    <div>
                      <label>Select Time</label>
                      <input type="time" placeholder="00:00" />
                    </div>
                    <div>
                      <label>Event End Date</label>
                      <input type="date" placeholder="March 9, 2024" />
                    </div>
                    <div>
                      <label>Select Time</label>
                      <input type="time" placeholder="00:00" />
                    </div>
            </Grid>
            <section>
                <label>Location of The Event</label>
                <input type="text" placeholder="Give a detail description of your event"/>
              </section>
              <section>
                <label>Contact Details</label>
                <input type="text" placeholder="Give a detail description of your event"/>
              </section>
        </WrapForm>
        <WrapForm>
            <SectionHeader>
             <h3>Event Ticketing</h3>
             <p>Add ticket so you could sell them.</p>
            </SectionHeader> 
           <CheckSec>
           <img src="/images/watchlist-icon.svg" />
              <span
               onClick={() => setToggle(!toggle)}
               >Add Ticket</span>
              
           </CheckSec>
        </WrapForm>    
           {toggle && (
            <TicketWrap>
            <SectionHeader>
             <big
             onClick={() => setToggle(!toggle)}
             >x</big>
              <h3>Ticket Info</h3>             
             </SectionHeader>
             <section>
                   <section>
                       <label>Ticket Name</label>
                       <input type="text" placeholder="e.g: bojo music Events 2024"/>
                   </section>
                   <section>
                       <label>Describe Your Ticket</label>
                       <input type="text" placeholder="Give a detail description of your event"/>
                   </section>
                   <CostInput>
                       <label>Ticket Price</label>
                       <span>GHS <input type="text" placeholder="e.g: 20.00" /></span>
                   </CostInput>
                   <section>
                       <label>Total number of Tickets</label>
                       <input type="text" placeholder="Enter the quantity of tickes you want sell."/>
                   </section>
                   <BtnSave>
                     <input type="submit" value="Save" />
                  </BtnSave>
              </section>
              
            </TicketWrap>
           )}
   
        <WrapForm>
            <SectionHeader>
             <h3>Preference</h3>
             <p>Publish event so you could start selling tickets.</p>
            </SectionHeader> 
           <CheckSec>
           <input type="checkbox" />
              <span>Publish Event</span>
           </CheckSec>
        </WrapForm>
        <BntSubmit>
              <input type="clear" value="Clear Form"/>
              <input type="submit" value="Save" />
        </BntSubmit>
    </Forms>
   
   </Container>
  )
}

export default CreateEvent
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

const TicketWrap = styled.div`
background: whitesmoke;
padding: 10px 25px;
cursor: pointer;
overflow: hidden;
border-radius: 10px;
border: 4px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
display: flex;
flex-direction: column;
height: calc(100vh - 140px);
width: 75%;
z-index: 1;
position: fixed;
  div{
    h3{
      color: black;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  span{
    color: grey;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;
   
  }
  &:hover{
    transform: scale(1.05);
    border: 4px solid rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }

  section{
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
   
   
    label{
      margin-left: 0;
      color: black;
    }
    input{
      width: 100%;
      padding: 8px 10px;
      border: black solid 0.01px;
      border-radius: 5px;
      &:hover{
        padding: 10px;
      }
` 
const Grid = styled.div`
display: grid;
padding: 26px 0;
grid-gap: 25px;
grid-template-columns: repeat(2, minmax(0, 1fr));
input{
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  &:hover{
    padding: 10px;
  }
}
`

const Forms = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-centent: center;
  flex-direction: column;
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
  span{
    color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
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
  section{
    margin-bottom: 20px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
   
   
    label{
      margin-left: 0;
      
    }
    input{
      width: 100%;
      padding: 8px 10px;
      border: none;
      border-radius: 5px;
      &:hover{
        padding: 10px;
      }
     
    }
    select{
      margin-bottom: 20px;
      display: flex;
      background-color: white;
      width: 100%;
      padding: 8px 10px;
      border: none;
      border-radius: 5px;
    }
  }
  img{
    width: 15px;
  }
`

const CheckSec = styled.div`
display: flex;
flex-direction: row;
input{
  margin-top: 20px;
}
span{
  margin-top: 20px;
  color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    margin-left: 10px;
}
img{
  margin-top: 20px;
}
`

const CostInput = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
margin-bottom: 30px;
p{
  font-size: 15px;
}
span{
  width: 300px;
  background: whitesmoke;
  border: black solid 0.1px;
  border-radius: 6px;
  color: black;
    font-size: 13px;
    &::before{
      content: "";
    }
    &::after{
      content: " ";
    }
    input{
      background: white;
      margin-left: 10px;
      border-left: black solid 0.1px;
      border-radius: 0px 6px 6px 0px;
    }
}
`
const CheckBtn = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
div{
  display: flex;
  input{
    width: 20px;:
  }
  span{
    color: white;
    font-size: 13px;
    &::before{
      content: "";
    }
    &::after{
      content: " ";
    }
  }
}

`
const BntGroup = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
button{
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  &:focus{
    background-color: blue;
    color: white;
   
  }
}
span{
  width: 30%;
  color: white;
  &::before{
    content: "";
  }
  &::after{
    content: "";
  }
}
`
const BntSubmit = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin: 30px 0;
    input{
      margin: 0% 10%;
      padding: 6px;
      width: 100px;
      cursor: pointer;
      border-radius: 5px;
      border: 4px solid rgba(249, 249, 249, 0.1);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

      &:hover{
        padding: 8px;
        border: 4px solid rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
      &:focus{
        padding: 10px;
        background-color: blue;
        color: white;
        border: 0.1px solid rgba(249, 249, 249, 0.1);
      }
    }    

`
const SectionHeader = styled.div`
margin-bottom: 20px;
padding-bottom: 10px;
border-bottom: whitesmoke solid 1px;

big{
  color: black;
  float: right;
  margin: 5px 10px auto auto;
}
h3
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  &::before{
    content: "*";
    color: green;
  }
}
p{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: grey;
}
`
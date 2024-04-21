import React from 'react'
import styled from 'styled-components'

function CreateAward() {
  return (
   <Container>
    <Forms>
        <WrapLogo>
          <div>
            <h3>Lets Begin</h3>
          </div>
          <div>
            <img src="images/logo.png" />
          </div>
          <span>click image to select logo</span>
        </WrapLogo>
        <WrapForm>
            <SectionHeader>
             <h3>Award Info</h3>
             <p>Who is organising the award.</p>
            </SectionHeader>
            <section>
              <section>
                <label>Organisation</label>
                <select>
                  <option>Organisaton's name</option>
                  <option>Organisaton's name</option>
                </select>
              </section>
              <section>
                <label>Name Your Award</label>
                <input type="text" placeholder="e.g: bojo music awards 2024"/>
              </section>
            </section>
            <Grid>
                    <div>
                      <label>Voting Start Date</label>
                      <input type="date" placeholder="March 9, 2024" />
                    </div>
                    <div>
                      <label>Select Time</label>
                      <input type="time" placeholder="00:00" />
                    </div>
                    <div>
                      <label>Voting End Date</label>
                      <input type="date" placeholder="March 9, 2024" />
                    </div>
                    <div>
                      <label>Select Time</label>
                      <input type="time" placeholder="00:00" />
                    </div>
            </Grid>
        </WrapForm>
        <WrapForm>
            <SectionHeader>
             <h3>Enable Online Nomination</h3>
             <p>Specify nomination date, time and pricing.</p>
            </SectionHeader>
           <CheckSec>
              <input type="checkbox" />
              <span>Enable Nominations</span>
           </CheckSec>
        </WrapForm>
        <WrapForm>
            <SectionHeader>
             <h3>Pricing Info</h3>
             <p>Determin the type of pricing to be used.</p>
            </SectionHeader>
            <section>
              <BntGroup>
                    <button>Choose Paid Voting</button>
                    <span></span>
                    <button>Choose Social Voting</button>
              </BntGroup>
              <CheckBtn>
                  <h4>Voting Type</h4>
                   <div>
                    <input type="checkbox" />
                      <span>Normal</span>
                   </div>
                    <div>
                      <input type="checkbox" />
                      <span>Bulk</span>
                    </div>
              </CheckBtn>
              <CostInput>
                <p>Cost per Vote</p>
                <span>GHS <input type="text" placeholder="e.g: 0.5" /></span>
              </CostInput>
              <CheckBtn>
                  <h4>Voting Preferences</h4>
                   <div>
                    <input type="checkbox" />
                      <span>Publish Award</span>
                   </div>
                    <div>
                      <input type="checkbox" />
                      <span>Show Results</span>
                    </div>
              </CheckBtn>
            </section>
        </WrapForm>
        <BntSubmit>
              <input type="clear" value="Clear Form"/>
              <input type="submit" value="Save" />
        </BntSubmit>
    </Forms>
   </Container>
  )
}

export default CreateAward

const SectionHeader = styled.div`
padding-bottom: 20px;
border-bottom: whitesmoke solid 1px;
margin-bottom: 20px;
h3{
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
`

const CheckSec = styled.div`
display: flex;
flex-direction: row;
span{
  color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    margin-left: 10px;
    &::before{
      content: "";
    }
    &::after{
      content: "";
    }

}
`
const Container = styled.div`
 
`
const CostInput = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
p{
  font-size: 15px;
}
span{
  width: 300px;
  background: whitesmoke;
  border: none;
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
        border: 0.1px solid rgba(249, 249, 249, 0.1);
      }
    }    

`

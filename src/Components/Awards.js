import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function Awards() {
  return (
    <Container>
        <Link to={"/award"}>
            <Wrap>
            
            <section>
                <h4>Award's name appears here</h4>
                <div>
                    <span> Award Status</span>
                    <span> service fee <b>0%</b></span>
                    <span> award code</span>
                </div>
            </section>
            <img src="/images/logo.png" />
            <AwardInfo>
                <div>
                    charge per vote<br/>
                    <span> GHS 0.00</span>
                </div>
                <div>
                    Published Result<br/>
                    <span> NO</span>
                </div>
                <div>
                    Number of votes<br/>
                    <span> 0</span>
                </div>
                <div>
                    Total Revenue<br/>
                    <span> GHS 0.00</span>
                </div>
                <div>
                    Amount Redrawed<br/>
                    <span> GHS 0.00</span>
                </div>
                <div>
                    Amount Left<br/>
                    <span> GHS 0.00</span>
                </div>
            </AwardInfo>
            </Wrap>
        </Link>
        
        
    </Container>
  )
}

export default Awards
const AwardInfo = styled.div`
display: grid;
padding: 10px;
grid-gap: 25px;
grid-template-columns: repeat(3, minmax(0, 1fr));
color: white;
span{
    color: grey;
    font-size: 14px;
    font-weight: bold;
    
}
`

const Container = styled.div`
margin-top: 30px;
display: grid;
grid-gap: 25px;
grid-template-columns: repeat(3, minmax(0, 1fr));
@media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 }
`


const Wrap = styled.div`
color: white;
display: flex;
flex-direction: column;
cursor: pointer;
border-radius: 10px;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
img {
  width: 100%;
  height: 50%;
}
&:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 88%) 0px 26px 30px -10px, rgb(0 0 0 / 72%) 0px 16px 10px -10px;
}
        section{
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 20px 10px;
            div{
                display: flex;
                width: 100%;
                padding: 0 10px;
                align-items: center;
                justify-content: space-between;
            }
        }
`
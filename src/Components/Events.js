import React from 'react'
import styled from 'styled-components'

function Events() {
  return (
    <Container>
       <Wrap>
           
           <section>
             <h4>Event name appears here</h4>
               <div>
                   <span> Event Status</span>
                   <span> service fee <b>0%</b></span>
                   <span> Event code</span>
               </div>
           </section>
           <img src="/images/logo.png" />
           <AwardInfo>
               <div>
                   charge per Ticket<br/>
                   <span> GHS 0.00</span>
               </div>
               <div>
                   Total Sales<br/>
                   <span>0/total number</span>
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
    </Container>
  )
}

export default Events
const AwardInfo = styled.div`
display: grid;
padding: 10px;
grid-gap: 25px;
grid-template-columns: repeat(3, minmax(0, 1fr));
span{
    color: grey;
    font-size: 14px;
    font-weight: bold;

}
`

const Container = styled.div`
margin-top: 30px;
display: grid;
padding: 30px 0px 26px;
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
width: 75%;
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
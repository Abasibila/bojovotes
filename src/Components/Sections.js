import React, { useState} from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
function Sections() {

  const [toggle, setToggle] = useState(false);
  const [toggl, setToggl] = useState(false);


  return (
    <Container>
       <WrapForm>
            <SectionHeader>
             <h3>Section Name</h3>
             <p>Award name appears here.</p>
            </SectionHeader>
            <Grid>
                    <div>
                        <select>
                        <option>All Categories</option>
                        <option>Category one</option>
                        </select>
                    </div>
                    <div>
                      <input type="text" placeholder="Name of nominee" />
                    </div>
                    <div>
                     <button><SearchIcon /></button>
                    </div>
                    <div>
                     <button
                      onClick={() => setToggle(!toggle)}
                      ><Dots /></button>
                     {toggle && (
                      <ActionPopup>
                          <button><EditIcon />Edit</button>
                          <button> <DownloadIcon /> Download Data</button>
                      </ActionPopup>
                     )}
                    </div>
            </Grid>
        </WrapForm>
        <WrapScroll>
            <GridScroll>
                <img src='/images/developper.jpg' />
                <p><b><b>0 </b>Nominee Name</b></p>
                <p>Publish status</p>
                <p>(Voting code)</p>
                <p>Award Name</p>
                <p>nominated Date</p>
                <p>nominated Time</p>
                <BtnGrop>
                    <button><Dots
                      onClick={() => setToggl(!toggl)}
                    /></button>
                    {toggl && (
                        <ActionPop>
                            <button><EditIcon />Edit</button>
                            <button>Delete</button>
                        </ActionPop>
                     )} 
                </BtnGrop>
                
            </GridScroll>
        </WrapScroll>
    </Container>
  )
}

export default Sections

const EditIcon = styled(EditOutlinedIcon)`

`
const DownloadIcon = styled(DownloadOutlinedIcon)``
const BtnGrop = styled.div`
position: relative;
`
const Dots = styled(MoreHorizOutlinedIcon)`
position: relative;
`
const SearchIcon = styled(SearchOutlinedIcon)``

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
    font-style: italic;
    &::before{
      content: "<-";
    }
    &::after{
      content: "->";
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
  button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    border-radius: 15px;
}
`
const WrapScroll = styled(WrapForm)`
position: relative;
`
const GridScroll = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
overflow: visible;
img{
    width: 50px;
    height: 50px;
    border-radius: 25px;
}
p{
    Margin-left: 15px;
}
button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    height: 30px;
    width: 30px;
    border-radius: 15px;
}
@media(max-width: 760px){
    overflow-x: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
}

}
`
const Grid = styled.div`
position: relative;
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
button{
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 3px solid rgba(249, 249, 249, 0.1);

}
select{
    padding: 8px;
    border-radius: 5px;
}
`

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
`


const Wrap = styled.div`
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

const ActionPopup = styled.div`
display: flex;
flex-direction: column;
background: whitesmoke;
position: absolute;
margin-top: -35px;
margin-left: 35px;
width: 150px;
height: 50px;
overflow: hidden;
cursor: pointer;
border-radius: 10px;
border: 4px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
@media(max-width: 760px){
  width: 120px;
}
button{
    cursor: pointer;
    width: 120px;
    margin: 2px;
    border: none;
    
  @media(max-width: 768px){
    width: 120px;
    font-size: 11px;
  }
  svg{
      width: 15px;
      height: 15px;
  }
}
`
const ActionPop = styled(ActionPopup)`
margin-top: -35px;
right: 35px;
position: absolute;
`
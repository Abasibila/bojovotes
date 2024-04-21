import React from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import OrganisationIcon from '@mui/icons-material/Group';
import ArrowIcon from '@mui/icons-material/ArrowCircleUp';
import EditIcon from '@mui/icons-material/Edit';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { Translate } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
// import {
//     selectUserName,
//     selectUserPhoto, 
//     setUserLogin
// } from "../features/Users/userSlice";
// import { useDispatch, useSelector } from 'react-redux';
// authentication
// import { auth, provider } from "../firebase";

function Header() {
    // const dispatch = useDispatch();
    // const userName = useSelector(selectUserName);
    // const userPhoto = useSelector(selectUserPhoto);
    
    // Login function setup----comment
    // const signIn = () => {
    //       auth.signInWithPopup(provider)
    //       .then((result)=>{
    //         let user = result.user
    //         dispatch(setUserLogin({
    //             // name: user.displayName,
    //             // email: user.email,
    //             // photo: user.photo
    //         }))
    //       })
    // }

    // { !userName ? (
    //     <Login>Sign In</Login>) :  kdfdl
    // }

    const [toggle, setToggle] = useState(false);
    const [profiletoggle, setProfileToggle] = useState(false);
  return (
<>
    <Nav>
      <Link to={"/"}>
        <Logo src="/images/LOGO.png" />
      </Link>
            <Wrap>
               
                     <a>
                        <NavMenuBar 
                        onClick={() => setToggle(!toggle)}
                        />
                     </a>   
            </Wrap>
             <NavMenu>
                        <Link to={"/awards"}>
                                <a>
                                <AwardIcon />
                                <span>AWARDS</span>
                                </a>
                        </Link>
                        <Link to={"/events"}>
                                <a>
                                    <EventIcon />
                                    <span>EVENTS</span>
                                </a>
                        </Link>
                        <Link to={"/createaward"}>
                                <a>
                                    <AddIcon />
                                    <span>Add Award</span>
                                </a>
                        </Link>
                        <Link to={"/createevent"}>
                                <a>
                                    <AddIcon />
                                    <span>Add EVENT</span>
                                </a>
                        </Link>
                </NavMenu>
                <UserImg src="/images/developper.jpg" 
                    onClick={() => setProfileToggle(!profiletoggle)}
                />
                {profiletoggle && (
                    <UserToggle>
                            <a>
                                <EditIcon />
                                <span>Edit Profile</span>
                            </a>
                            <a>
                                <OrganisationIcon />
                                <span>Organisation</span>
                            </a>
                        <Link to={"/login"}>
                            <a>
                                <ArrowIcon />
                                <span>LogOut</span>
                            </a>
                        </Link>
                    </UserToggle>
                )}
    </Nav>
    {toggle && (
        <NavToggle>
        <Link to={"/awards"}>
                        <a>
                        <AwardIcon />
                        <span>AWARDS</span>
                        </a>
                </Link>
                <Link to={"/events"}>
                        <a>
                            <EventIcon />
                            <span>EVENTS</span>
                        </a>
                </Link>
                <Link to={"/createaward"}>
                        <a>
                            <AddIcon />
                            <span>Add Award</span>
                        </a>
                </Link>
                <Link to={"/createevent"}>
                        <a>
                            <AddIcon />
                            <span>Add EVENT</span>
                        </a>
            </Link>
        </NavToggle>
    ) 
    }
</>
  )
}

export default Header

const UserToggle = styled.div`
display: flex;
flex-direction: column;
padding: 5px;
background: whitesmoke;
position: absolute;
top: 70px;
right: 0;
transform-origin: right center;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
z-index: 1;
a{
    color: indigo;
    display: flex;
    flex-direction: row;
    padding: 4px 2px;
    cursor: pointer;
    span{
        color: green;
        padding: 0 3px;
        &:hover{
            color: grey;
        }
    }
    &:hover{
        color: grey;
    }
}
`
const Wrap = styled.div`
display: flex;
position: relative;
a{
    display: ${props => props.show ? 'none' : 'flex'};

}
b{
    display: ${props => props.show ? 'flex' : 'none'};
}
`
const AddIcon = styled(AddOutlinedIcon)``
 const EventIcon = styled(CalendarMonthOutlinedIcon)`
 `
const AwardIcon = styled(EmojiEventsIcon)`
`
const NavMenuBar = styled(MenuIcon)`
cursor: pointer;
@media(min-width: 769px) {
    opacity: 0;
 }
`
const UserImg = styled.img`
    width: 48px;
    width: 48px;
    border-radius: 50%;
    cursor: pointer;
`
const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 20px;
align-items: center;
justify-content: center;
@media(max-width: 768px) {
    display: none;
 }
    a{
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
        img{
            height: 20px;
        }
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -1px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover {
           span:after{
            transform: scaleX(1);
            opacity: 1;
           } 
        }
    }
`
const Logo = styled.img`
width: 50px;
`
const Nav = styled.nav`
position: relative;
justify-content: space-between;
display: flex;
align-items: center;
padding: 0 30px;
height: 70px;
`
const NavToggle = styled.div`
    width: 100%;
    padding: 0 30px;
    height: 70px;
    background: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 3s;
    @media(min-width: 760px){
        display: none;
    }
    @media(max-width: 768px){
        padding: 0 5px;
        
    }
    a{
        cursor: pointer;
        display: flex;
        align-items: center;
            span{
                display: flex;
                font-size: 13px;
                letter-spacing: 1.42px;
                position: relative;
                @media(max-width: 768px){
                    font-size: 12px;                  
                }
                &:after {
                    content: "";
                    height: 2px;
                    background: black;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -1px;
                    opacity: 0;
                    transform-origin: left center;
                    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                    transform: scaleX(0);
                }
            }
            &:hover {
               span:after{
                transform: scaleX(1);
                opacity: 1;
               } 
            }
        }
   a{
        display: flex;
        align-items: center;
        border: black solid 1px black solid 1px black solid 1px black solid 1px;
        width: 100%;
        color: black;
        cursor: pointer;
   }
`
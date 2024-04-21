import React, { useEffect } from 'react'
import styled from "styled-components"
import AwardSlider from './AwardSlider'
// import db from '../firebase'
import Awards from './Awards'
// import { useDispatch } from 'react-redux'
// import { setAwards } from '../features/Database/database';

function Home() {

  // const dispatch = useDispatch();

  // useEffect(()=>{
  //   db.collection("awards").onSnapshot((snapshot)=>{
  //     let tempAwards = snapshot.docs.map((doc)=>{
  //         return {
  //           id: doc.id, ...doc.data()
  //         }
  //     })
  //      dispatch(setAwards(tempAwards));
  //   })
  // }, [])

  return (
    <Container>
      <AwardSlider />
      <Awards />
    </Container>
  )
}

export default Home
const Container = styled.main`
min-height: calc(100vh - 70px);
padding: 20px;
position: relative;
overflow-x: hidden;
  &:before {
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`

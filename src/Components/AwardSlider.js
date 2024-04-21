import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function AwardSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
    }
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/logo.png" />
          <span>AWARDS NAME</span>
      </Wrap>
      <Wrap>
        <img src="/images/logo.png" />
        <span>AWARDS NAME</span>
      </Wrap>
    </Carousel>
  )
}

export default AwardSlider

const Carousel = styled(Slider)`
margin-top: 0;

    ul li button{
        font-size: 10px;
        color: rgb(150, 150, 171);
        
    }
    
    
    li.slick-active button:before {
        color: white;
    }
    .slick-list {
       overflow: visible; 
    }
    button {
        z-index: 1;
    }

`

const   Wrap = styled.div`
    height: 30vh;    
    img {
        opacity: 0.7;
        border: solid transparent 4px;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration: 300ms;
        &:hover{
            opacity: 1;
            border: 4px solid rgba(249, 249, 249, 0.8);
        }
     }
     span{
      display: flex;
      justify-content: center;
      align-items: center;
      
     }
`



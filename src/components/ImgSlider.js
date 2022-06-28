import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };

    return (
        <Carousel {...settings}>
            <Wrap>
            <img className="slide" src="/images/slider-jungle.jpg" style={{width: '1243', height: '325px'}} alt=""/>
            </Wrap>
            <Wrap>
                <img className="slide" src="https://cannonball-cdn.bamgrid.com/assets/originals/Luca_630x378@1,5x-2.png" style={{width: '1243px', height: '325px'}} alt=""/>
            </Wrap>
            <Wrap>
                <img className="slide" src="https://cannonball-cdn.bamgrid.com/assets/originals/LOKI_MLP_630x378.jpg" style={{width: '1243px', height: '325px'}} alt=""/>
            </Wrap>
            
            <Wrap>
                <img className="slide" src="https://cannonball-cdn.bamgrid.com/assets/originals/Raya_ATLD.png" style={{width: '1243px', height: '325px'}}alt=""/>
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider) `
        margin-top: 20px;
        ul li button {
            &:before {
                font-size: 10px;
                color: rgb(150, 150, 171);
            }
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
const Wrap = styled.div `
            cursor: pointer;
            user-select: none;
            display: flex;
            img {
            border: 4px solid transparent;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
            transition-duration: 300ms;
            object-fit: cover;
            z-index: -1;

            &:hover {
            border: 4px solid rgba(249, 249, 249, 0.8);
        }

        span {
            color: white;
        }

    }
`


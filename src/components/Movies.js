import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";  


function Movies() {

    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <Link to="/detail"><img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg"alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail"><img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg"alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail"><img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg"alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail"><img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg"alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail"><img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg"alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail"><img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg"alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail"><img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg"alt="" /></Link>
                </Wrap>
                <Wrap>
                    <Link to="/detail"><img src="https://cannonball-cdn.bamgrid.com/assets/originals/Disney_MLP_GridItem_TS4_AUNZ.jpg"alt="" /></Link>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div `
    h4::selection {
        /* Change highlight background color to black */
        background: black;
        /* Change highlight text color to red */
        color: white;
    }
    @media(max-width: 768px){
        h4 {
            text-align: center;
            justify-content: center;
            font-size: 20px;
            font-stretch: expanded;
        }
    }
`

const Content = styled.div `
    display: grid;
    grid-gap: 25px;
    margin-top: 20px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-bottom: 50px;

    @media(max-width: 768px){
        flex-direction: column;
        display: flow-root;
        margin-bottom: 50px;
    }
`

const Wrap = styled.div `
        border: 3px solid rgba(249, 249, 249, 0.1);
        border-radius: 10px;
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        overflow: hidden;
        user-select: none;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &:hover {
            box-shadow: rgb(0 0 0 / 80%) 0 26px 30px -10px, rgb(0 0 0 / 73%) 0 16px 10px -10px;
            transform: scale(1.05);
            border-color: rgba(249, 249, 249, 0.8);
        }

        @media (max-width: 768px) {
            margin-bottom: 25px;
            img{
                width: 100%;
                height: 100%;
            }
`


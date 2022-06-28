import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
            <div className="item">
                <div className="item__border">
                    <img className="item__image" src="/images/viewers-disney.png" alt="Disney"/>
                    <img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_C061B00E543326DA345FBF996B4D3D76422B58A49FDEE9AD9A2664618619A8F9" />
                </div>
            </div>
            </Wrap>
            <Wrap>
            <div className="item">
                <div className="item__border">
                <img className="item__image" src="/images/viewers-pixar.png" alt="Pixar"/>
                    <img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_92FA84DF0F5D951171B41E5947716ADA382A15AE5DA37869E9D592D043F49316" />
                </div>
            </div>
            </Wrap>
            <Wrap>
            <div className="item">
                <div className="item__border">
                <img className="item__image" src="/images/viewers-marvel.png" alt="Marvel"/>
                    <img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_B8F3C4DDB037CD1840A53BDFA0AA0504E9FDDE7781D62D28230D5C74F2B06624" />
                </div>
            </div> 
            </Wrap>
            <Wrap>
            <div className="item">
                <div className="item__border">
                <img className="item__image" src="/images/viewers-starwars.png" alt="Star Wars"/>
                    <img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_59F432D7A600A8F1CE36AE4D0B96570AC7C8277A0E8855BC06FABBAE090E6577" />
                </div>
            </div>
             </Wrap>
            <Wrap>
            <div className="item" style={{marginBottom: '0px'}}>
                <div className="item__border">
                <img className="item__image" src="/images/viewers-national.png" alt="National Geographic"/>
                    <img alt="" className="item__image hover-image" src="https://prod-ripcut-delivery.disney-plus.net/v1/rawFiles/disney/RAW_16793CC7E2AF7B8687B0DD00673503CBC14CB2C801952D62B4551B6866073650" />
                </div>
            </div>            
            </Wrap>
        </Container>
    )
} 



export default Viewers

const Container = styled.div `
    margin-top: 50px;
    display: grid;
    grid-gap: 25px;
    padding-bottom: 20px;
    grid-template-columns: repeat(5, minmax(0, 1fr));

    @media (max-width: 768px) {
        flex-direction: column;
        display: flow-root;
        margin-bottom: 50px;
        padding-bottom: 0;
    }
`

const Wrap = styled.div `
    user-select: none;
    .item {
        width: 100%;
        position: relative;
        cursor: pointer;

      }
      
      .item__border {
        position: relative;
        box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
        border-radius: 10px;
        border: 4px solid rgba(249, 249, 249, 0.1);
        transition: transform 250ms ease-in-out, border 250ms ease-in-out, box-shadow 250ms ease-in-out;
      }
      
      .item__image {
       width: 100%;
       height: 100%;
       border-radius: 5px;
       z-index: 1;
      }
      
      .item__image.hover-image {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: opacity 500ms ease-in-out;
        visibility: hidden;
      }
      
      .item:hover .item__border {
        box-shadow: rgba(0, 0, 0, 0.8) 0px 40px 58px -16px, rgba(0, 0, 0, 0.72) 0px 30px 22px -10px;
        transform: scale(1.05);
        border: 4px solid rgba(249, 249, 249, 0.8);
      }
      
      .item:hover .item__image.hover-image {
        position: absolute;
        top: 0;
        z-index: -1;
        opacity: 1;
        visibility: visible;
      }

      @media (max-width: 768px) {
        .item{
            margin-bottom: 50px;
            width: 100%;
            height: 100%;
        }

    }
      
      
`

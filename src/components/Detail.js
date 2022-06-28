import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://lumiere-a.akamaihd.net/v1/images/adb482f0013c85a44f6c37fd3411f73d_4096x1715_28786d74.jpeg?region=0,0,4096,1715&width=600" alt="Loki"/>
            </Background>
            <ImageTitle>
                <img src="/images/loki-title.png" alt=""/>
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <a href="#"><img src="/images/play-icon-black.png" alt=""/>
                    <span>PLAY</span></a>
                </PlayButton>
                <TrailerButton>
                        <a target="_blank" href="https://www.youtube.com/embed/G4JuopziR3Q?autoplay=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1&mute=0">
                        <img src="/images/play-icon-white.png" alt=""/>
                        <span>TRAILER</span></a>   
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt=""/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
            2021 . 45m . Adventure, Fantasy, Action
            </SubTitle>
            <Description>
            The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of "Avengers: Endgame."
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div `
        min-height: calc(100vh - 70px);
        padding: 0 calc(3.5vw + 5px);
        position: relative;
        overflow-y: hidden;

`

const Background = styled.div `
            position: fixed;
            top: 0; 
            bottom: 0;
            left: 0; 
            right: 0;
            z-index: -1;
            opacity: 0.9;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                user-select: none;
            }
`

const ImageTitle = styled.div `
        height: 30vh;
        min-height: 200px;
        width: 50vw;
        min-with: 100px;
        user-select: none;
        margin-top: 40px;

        img {
            width: 400px;
            height: 100%;
            object-fit: contain;
            user-select: none;
        }
`

const Controls = styled.div `
            display: flex;
            align-items
`

const PlayButton = styled.button `
            border-radius: 4px;
            font-size: 15px;
            display: flex;
            align-items: center;
            height: 56px;
            background: rgb(249, 249, 249);
            border: none;
            padding: 0 24px;
            margin-right: 22px;
            letter-spacing: 1.8px;
            cursor: pointer;
            user-select: none;

            &:hover {
                background: rgb(198, 198, 198);
            }
            a{
                text-decoration: none;
                color: black;
                display: flex;
                justify-content: center;
                align-items: center;
            }
`

const TrailerButton = styled(PlayButton) `
                
                background: rgba(0, 0, 0, 0.3);
                border: 1px solid rgb(249, 249, 249);
                display: flex;
                
                a{
                    text-decoration: none;
                    color: rgb(249, 249, 249);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
`

const AddButton = styled.button `
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 2px solid white;
            background: rgba(0, 0, 0, 0.6);
            cursor: pointer;
            margin-right: 16px;
            user-select: none;

            span {
                font-size: 24px;
                color: white;
            }
`

const GroupWatchButton = styled(AddButton) `
            background: rgba(0, 0, 0, 0.6);
`

const SubTitle = styled.div `
            color: rgb(249, 249, 249);
            font-size: 15px;
            min-height: 20px;
            margin-top: 26px;
            ::selection {
                /* Change highlight background color to black */
                background: black;
                /* Change highlight text color to red */
                color: white;
              }
`

const Description = styled.div `
            line-height: 1.4;
            color: rgb(249, 249, 249);
            font-size: 20px;
            margin-top: 16px;
            max-width: 611px;
            ::selection {
                /* Change highlight background color to black */
                background: black;
                /* Change highlight text color to red */
                color: white;
              }
`
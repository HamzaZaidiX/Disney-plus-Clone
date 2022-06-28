import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";  


function Login() {
    return (
        <Container>
               {/* <LoginBtn>Login</LoginBtn> */}
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg"/>
                <SignUp><Link to="/">GET THE DISNEY BUNDLE</Link></SignUp>
                <Description>
                Stream now. <Link to="#">Terms apply.</Link>
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png"/>
                <Sub><Link to="#">Sign up for Disney+ only.</Link></Sub>
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div `
            position: relative;
            height: calc(100vh - 70px);
            display: flex;
            align-items: top;
            justify-content: center;

            &:before {
                position: absolute;
                content: '';
                top:0;
                bottom: 0;
                left: 0;
                right: 0;
                background-image: url("/images/login-background.jpg");
                background-position: top;
                background-size: cover;
                background-repeat: no-repeat;
                z-index: -1;
                user-select: none;
                opacity: 0.7;
            }

`

const CTA = styled.div `
            max-width: 650px;
            padding: 80px 40px;
            width: 90%;
            display: flex;
            flex-direction: column;
            margin-top: 100px;
            align-items: center;
`


const CTALogoOne = styled.img `
            user-select: none;
`


const SignUp = styled.div `
          a {
              text-decoration: none;
              color: #f9f9f9;
          }
            width: 100%;
            background-color: #0063e5;
            text-align: center;
            padding: 17px 0;     
            border-radius: 4px;
            font-size: 18px;
            cursor: pointer;
            user-select: none;
            letter-spacing: 1.5px;
            transition: all 250ms;
            margin-top: 8px;
            font-family: Avenir Roman,sans-serif;
                            

            &:hover {
                background: #0483ee;
            }
        
`

const Description = styled.p `
            font-size: 10px;
            letter-spacing: 1.5px;
            text-align: center;
            line-height: 1.5;
            color: hsla(0,0%,75.3%,.8);
            ::selection {
                /* Change highlight background color to black */
                background: black;
                /* Change highlight text color to red */
                color: hsla(0,0%,75.3%,.8);
              }
            a {
                text-decoration: underline;
                color: white;
                cursor: pointer;
                ::selection {
                    /* Change highlight background color to black */
                    background: black;
                    /* Change highlight text color to red */
                    color: white;
                  }
            }`
const CTALogoTwo = styled.img `
            width: 90%;
            margin-top: 10px;
            user-select: none;
`
const Sub = styled.div `
   margin-top: 20px;
    a{
        text-decoration: underline;
        color: white;
        cursor: pointer;
        ::selection {
            /* Change highlight background color to black */
            background: black;
            /* Change highlight text color to red */
            color: white;
          }  
    } 
`
const LoginBtn = styled.div `
        border: 1px solid #f9f9f9;
        padding: 8px 16px;
        border-radius: 4px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        background-color: rgba(0, 0, 0, 0.6);
        transition: all 0.2s ease 0s;
        cursor: pointer;
        height: 40px;
        margin-left: 50%;
        z-index: 100;

        &:hover {
            background-color: #f9f9f9;
            color: black;
            border-color: transparent;
        }
`

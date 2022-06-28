import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom";  

function Header() {  
    
    return (
            <Nav>
                    <Link to= "/"><Logo src="/images/logo.svg" alt="Disney+"/></Link>
                <NavMenu>
                    <Link to= "/">
                        <img src="/images/home-icon.svg" alt="Home" />
                        <span>HOME</span>
                    </Link>
                    <Link to= "/">
                        <img src="/images/search-icon.svg" alt="Search" />
                        <span>SEARCH</span>
                    </Link>
                    <Link to= "/">
                        <img src="/images/watchlist-icon.svg" alt="Watch list" />
                        <span>WATCHLIST</span>
                    </Link>
                    <Link to= "/">
                        <img src="/images/original-icon.svg" alt="Originals" />
                        <span>ORIGINALS</span>
                    </Link>
                    <Link to= "/">
                        <img src="/images/movie-icon.svg" alt="Movies" />
                        <span>MOVIES</span>
                    </Link>
                    <Link to= "/">
                        <img src="/images/series-icon.svg" alt="Series" />
                        <span>SERIES</span>
                    </Link>
                </NavMenu>
                <Link to= "/login"><UserImg src="https://www.svgrepo.com/show/16907/avatar.svg" alt="Avatar" /></Link>
            </Nav>
    )
}

{/* Action
    Adventure
    Animation
    Comedy
    Crime
    Drama
    Documentary
    Sci-Fi
    Family
    History
    Fantasy
    Horror
    Music
    Mystery
    Romance
    Thriller
    War
    Western */}


export default Header

const Nav = styled.nav `
        height: 70px;
        background: #090b13;
        display: flex;
        align-items: center;
        padding: 0 36px;
        overflow-x: hidden;

        a {
            display: flex;
            align-items: center;
            padding: 0 12px;
            cursor: pointer;
            user-select: none;
            color: white;
            text-decoration: none;            

        }

`
const Logo = styled.img `
        width: 80px;
        cursor: pointer;
        user-select: none;
        
`

const NavMenu = styled.div `
        display: flex;
        flex: 1;
        margin-left: 25px;
        align-items: center;
        @media(max-width: 768px){
            display: none;
        }
        a {
            display: flex;
            align-items: center;
            padding: 0 12px;
            cursor: pointer;
            user-select: none;
            color: white;
            text-decoration: none;
            img {
                height: 20px;
            }
            span {
                font-size: 13px;
                letter-spacing: 1.42px;
                position: relative;

                &:after {
                    content: '';
                    height: 2px;
                    background: white;
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: -6px;
                    opacity: 0;
                    transform-origin: left center;
                    transform: scaleX(0);
                    transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
                }
            }

            &:hover {
                span:after {
                    transform: scaleX(1);
                    opacity: 1;
                }

                .fa fa-angle-down {
                    display: flex;
                    color: white;
                }

            }
`

const Dropdown = styled.div `
            
        .dropdown{
            position: absolute;
            top: 19%;
            left: 43%;
            padding-top: 20px;
            paddin-bottom: 20px;
            z-index: 1;
            display: none;
            float: left;
            min-width: 160px;
            font-size: 14px;
            text-align: center;
            justify-content: center;
            list-style: none;
            background-color: black;
            //background-clip: padding-box;
            border: 1px solid #ccc;
            border: 1px solid rgba(0,0,0,0.15);
            border-radius: 5px;
            -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
            box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
            cursor: pointer;
            user-select: none;
            text-tranform: uppercase;
           
            a {
                tet-decoration: none;
                font-weight: bold; 
                text-align: center;
                justify-content: center;
            }

            a:hover {

                color: gray;
                border-radius: 5px;
                transition: all 250ms;
            }
        }
`

const UserImg = styled.img `
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
        user-select: none;
        @media(max-width: 768px){
            margin-left: 70%;
            
        }
        @media(max-width: 425px) {
            margin-right: 20px;
            margin-left: 50%;
        }
        
`
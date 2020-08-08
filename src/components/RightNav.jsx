import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"
import menuImg from "./images/menu-img.svg"

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    li {
        padding: 0.5rem 1.5rem;
        margin-top: 0.5rem;
    }

    img {
        display: none;
    }

    @media (max-width: 768px) {
        background-color: hsl(0, 0%, 98%);
        flex-flow: column nowrap;
        align-items: center;
        position: fixed;
        top: 4.6rem;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 2rem;
        z-index: -2;
        transform: ${({ open }) => open ? "tranlateX(0)" : "translateX(100%)"};
        transition: transform 0.3s ease-in-out;

        img {
            display: flex;
        }
    }   
`;

export const RightNav = ({ open, setOpen }) => {
    return (
        <Ul open={open} className="navlinks">
            <Link className="link navlink" to={"/"} onClick={() => setOpen(!open)}><li><i class="fas fa-home hide-icon"></i> Home</li></Link>
            <Link className="link navlink" to={"/countries"} onClick={() => setOpen(!open)}><li><i class="fas fa-globe-europe hide-icon"></i> Countries</li></Link>
            <Link className="link navlink" to={"/maps"} onClick={() => setOpen(!open)}><li><i class="fas fa-map-marked-alt hide-icon"></i> Maps</li></Link>
            <Link className="link navlink" to={"/about"} onClick={() => setOpen(!open)}><li><i class="fas fa-info-circle hide-icon"></i> About</li></Link>
            <img src={menuImg} alt="menu-img" />
        </Ul>
    )
}

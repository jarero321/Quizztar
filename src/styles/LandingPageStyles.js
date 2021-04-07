import styled from "styled-components";
import {motion} from "framer-motion";
import Stars from "../img/Stars.svg"
import {Colors} from "../styles/Colors.js"
import {Link} from "react-router-dom";
export const SectionLanding = styled(motion.section)`
    background-image: url(${Stars});
    width: 100vw;
    height:100vh;
`;
export const ContainerSection = styled(motion.div)`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items:center;
`;
export const PlanetIMG = styled.div`
    width:100%;
    height:70%;
`;
export const Planet = styled(motion.img)`
    width:70%;
    height:100%;
    margin-left:21%;
    @media ( min-width:768px ){
        margin-top:5%;
    }
    @media (min-width:1200px) {
        width:80%;
        height:70%;
        margin-left:15.5%;
        margin-top:6.5%;
    }
`;
export const WhiteShadowimg = styled(motion.img)`
    position:fixed;
    width:90%;
    height:50%;
    left:5%;
    z-index:-1;
    top:6.5%;
    @media (min-width:768px){
        height:70%;
        top:0;
    }
`;
export const ContainerText = styled.div`
    width: 60%;
    height:20%;
    margin-left:10%;
    text-align:center;
`;
export const Title = styled(motion.h2)`
    color: ${Colors.main_color};
    text-transform:uppercase;
    font-size:35px;
    @media (min-width:768px){
        font-size:70px;
    }
    @media (min-width:1200px){
        font-size:70px;
    }
`;

export const ButtonStart = styled(motion.div)`
    margin-top:20%;
    width:100%;
    height:30%;
    border: 1px solid ${Colors.main_color};
    border-radius:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    &:hover{
        background-color:${Colors.main_color};
        a{
            color:black;
        }
    }

    @media (min-width:768px){
        height:40%;
        border:3px solid ${Colors.main_color};
    }
    @media (min-width:1200px){
        margin-top:5%;
        width:60%;
        margin-left:20%;
    }
`;
export const LinkStart = styled(Link)`
    text-decoration:none;
    color:${Colors.main_color};
    font-size:18px;
    @media (min-width:768px){
        font-size:30px;
    }
`;